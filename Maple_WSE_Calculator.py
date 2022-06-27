# -*- coding: utf-8 -*-
"""
Created on Sun Apr 10 15:11:14 2021

@author: Pearlite

##### REQUIRES PYTHON 3.6+ TO BE INSTALLED ON YOUR COMPUTER #####
"""

'''
BEGIN USER INPUT ===== BEGIN USER INPUT ===== BEGIN USER INPUT ===== BEGIN USER INPUT ===== 
'''
# Attack %: Enter amount of attack % from passives, soul, etc.
atk = 3

# Damage %: Enter amount of Damage and Boss Damage % from gears (excluding WSE potentials, but include flame/gear stat), passives, links, skill passive/active, hyper, node bonus, etc.
dmg = 432

# IED %: Enter amount of IED from gears (excluding WSE potentials, but include gear stat) in an example of "85" (exclude quotes) for 85%
    # Note that IED calculation isn't additive, so go look up how to calculate it. If you don't know how, the input list supports multiple inputs (duh, its an array).
# REMEMBER TO PUT COMMA BEHIND NUMBERS!!! (except for last one)
# You can comment out lines you don't have, or add things if missed
ied = [0,########################### No touchy, begin of array dummy
       #############################
       40,  # Legion Max Grid
       30,  # Hyper Stat Lv10
       30,  # Sup Gollux 4-set
       # 20,  # V-Matrix Bossing Skill Lv40 Passive
       # 20,  # Hyper Bossing Skill Passive
       15,  # Luminous Link Lv2
       10,  # Absolab 4-set
       # 10,  # MPE 77 Medal
       10,  # Ambition Lv100 Trait
       10,  # Clean Absolab Wep
       10,  # CRA hat
       5,   # CRA top
       5,   # CRA bot
       5,   # Empress Medal or CRA Title
       9,   # Explorer Mage Link Skill Empirical Knowledge Max Stack Lv3
       # 3,   # Soul Weapon Bonus
       3,   # Familiar Badge
       3,   # Blaster Legion Lv140 Card
       3,   # BT Legion Lv140 Card
       #############################
       0]########################### No touchy, end of array dummy

# number of familiars, assumes epic 30% boss or ied
fam = 0

# number of prime lines (If you have Unique familiars, you can increase prime lines to account for them)
    # prime lines are calculated as 12%/40%/40% for atk/dmg/ied
    # non-prime are calculated as 9%/30%/30% for atk/dmg/ied
prime = 3

# target boss pdr % (most mid-game are 300%). https://github.com/Pearlitic/pearlitic.github.io/tree/main/%25
pdr = 300

# display top n results
display_top = 10

## === ADVANCED OPTIONS === ##
# If you play a class with weird WSE, modify the max potential lines of you WSE:
max_wse_atk_lines = 9
max_wse_dmg_lines = 6
max_wse_ied_lines = 9

# print all results? (only set True for debug purposes)
display_all = False

### NOTE: If you intend to run this script by double clicking, uncomment the last line. Otherwise execute this script in the console/terminal or IDE.
'''
END OF USER INPUT ===== END OF USER INPUT ===== END OF USER INPUT ===== END OF USER INPUT =====
'''
##### DO NOT TOUCH CODE BELOW #####
# input sanity check
import sys
if (atk < 0):
    sys.exit('Invalid ATK Input (<0)')
if (dmg < 0):
    sys.exit('Invalid DMG Input (<0)')
if (fam < 0 or fam > 3):
    sys.exit('Invalid Familiar Count (<0 or >3)')
if (prime < 3 or prime > 9 + fam):
    sys.exit('Invalid Prime Lines (<0 or >(9 + familiar count))')
if (pdr < 0):
    sys.exit('Invalid Boss PDR (<0)')
if (display_top < 1):
    sys.exit('No Results Displayed')
if (max_wse_atk_lines < 0 or max_wse_dmg_lines < 0 or max_wse_ied_lines < 0):
    sys.exit('Invalid WSE max lines (<0)')
if (max_wse_atk_lines + max_wse_dmg_lines + max_wse_ied_lines < 9):
    sys.exit('Invalid WSE max lines (Sum of 3 must be >=9)')

# function to calculate final ied from array of ieds
def calcIED(arr, flag=True):
    if arr and flag:
        return 1 - (1-arr.pop())*calcIED(arr,False)
    elif arr:
        return (1-arr.pop())*calcIED(arr,False)
    else:
        return 1


# convert ied to decimal from percentage format
iedarr = [x*0.01 for x in ied] # [int(x)*0.01 for x in ied.split(',')]
# sanity check
for n in iedarr:
    if n < 0 or n > 1: sys.exit('Invalid IED Input (<0% or >100%)')
# calculate input ied (decimal) from above list
ied = calcIED(iedarr)
# sanity check
if ied > 1 or ied < 0:
    sys.exit('IED result out of bounds (result <0% or >100%)')
# convert input percentage to decimal
atk *= 0.01
dmg *= 0.01
pdr *= 0.01

# function to calclate final damage multiplier from atk, dmg, ied and pdr
def calcFD(a, d, i, pdr):
    # Damage Multiplier accounting for boss pdr
    DM = 1 - (1 - i) * pdr;
    # Sanity check
    if (DM > 1):
      	DM = 1
    elif DM < 0:
      	DM = 0
    # Return final damage accounting for atk/dmg bonus and damage multiplier
    return (1 + a)*(1 + d)*DM

# create dictionary to store results
table = {}
# 1 space string, ignore (debug formatting use)
s = ' '
# nested loop galore to generate all possible combinations of WSE and prime lines
for a in range(0,max_wse_atk_lines+1):
    for d in range(0,max_wse_dmg_lines+1+fam):
        for i in range(0,max_wse_ied_lines+1+fam):
            for pa in range(0,prime+1):
                for pd in range(0,prime+1):
                    for pi in range(0,prime+1):
                        # Only run when sum of a/d/i/fam is the correct amout of lines, and prime count is possible
                        if a+d+i == 9+fam and pa+pd+pi == prime and pa <= a and pd <= d and pi <= i:
                            # calculate final atk/dmg/ied for hypothetical WSE distribution
                            final_atk = atk + 0.09*pa + 0.12*(a-pa)
                            final_dmg = dmg + 0.4*pd + 0.3*(d-pd)
                            final_ied = calcIED([ied] + [0.4]*pi + [0.3]*(i-pi))
                            # calculate final damage %
                            FD = 100*calcFD(final_atk,final_dmg,final_ied,pdr)
                            # Debug print ignore
                            #print('%f %f %f %f' % (FD,final_atk,final_dmg,final_ied))
                            # print result if display_all is set to True
                            if display_all: print('FD: %3.0f%%\tA/D/I: (%d, %d, %d)\tPrime: (%d, %d, %d)' % (FD,a,d,i,pa,pd,pi))
                            # Add result into table
                            while True:
                                # If result not in dict, add to dict
                                if FD not in table: 
                                    table[FD] = [(a,d,i),(pa,pd,pi)]
                                    break
                                # If result is in dict, add 1e-10
                                FD += 0.00000_00001

# sort dictionary values to a list of arrays containing final damage % in decending order
sorted_fd = sorted(table, reverse=True)
# spacer
if display_all: print('================================================')
# print input parameters
print('Input Parameters:\nATK: %6d%%  DMG: %8d%%  IED: %8.1f%%\nFamiliars: %d  Prime Lines: %d  Boss PDR: %d%%' % (atk*100,dmg*100,ied*100,fam,prime,pdr*100))
# spacer
print('===== Printing Top %d Results =====' % display_top)
# print top n results defined at beginning
try:
    for i in range(display_top):
        print('Top %2d - FD: %3.0f%%\tA/D/I: %s\tPrime: %s' % (i+1,sorted_fd[i],table[sorted_fd[i]][0],table[sorted_fd[i]][1]))
        display_top -= 1
except:
    print('%s Result(s) not Displayed: Not Enough Combinations' % display_top)

# input("Press Enter to exit")
