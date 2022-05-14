# -*- coding: utf-8 -*-
"""
Created on Sun Apr 10 15:11:14 2021

@author: Pearlite
"""

'''
BEGIN USER INPUT
'''
# Attack %: Enter amount of attack % from passives, soul, etc.
atk = 3
# Damage %: Enter amount of Damage and Boss Damage % from gears (excluding WSE potentials, but include flame/gear stat), passives, links, skill passive/active, hyper, node bonus, etc.
dmg = 300
# IED %: Enter amount of IED from gears (excluding WSE potentials, but include gear stat) in an example format of "85" (include quotes) for 85%
    # Note that IED calculation isn't additive, so go look up how to calculate it. If you don't know how, the input field also supports multiple inputs seperated by commas in an example format of "30,30,10".
ied = "30,30,15,2"
# number of familiars, assumes epic 30%
fam = 3
# numebr of prime lines (If you have Unique familiars, you can increase prime lines to account for them)
prime = 3
# target boss pdr % (most mid-game are 300%). https://github.com/Pearlitic/pearlitic.github.io/tree/main/%25
pdr = 300
# display top n results
display_top = 10
'''
END OF USER INPUT
'''

#Split ied to array of nits
iedarr = [int(x)*0.01 for x in ied.split(',')]

# calculate final ied from array of ieds
def calcIED(arr, flag=True):
    if arr and flag:
        return 1 - (1-arr.pop())*calcIED(arr,False)
    elif arr:
        return (1-arr.pop())*calcIED(arr,False)
    else:
        return 1

# convert input percentage to deciamal
ied = calcIED(iedarr)
atk *= 0.01
dmg *= 0.01
pdr *= 0.01

# calclate final damage multiplier from atk, dmg, ied and pdr
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


table = {}
s = ' '
# Nested loop galore
for a in range(0,10):
    for d in range(0,10+fam):
        for i in range(0,10+fam):
            for pa in range(0,prime+1):
                for pd in range(0,prime+1):
                    for pi in range(0,prime+1):
                        # Only run when sum of a/d/i/fam is the correct amout of lines
                        if a+d+i==9+fam and pa+pd+pi==prime and pa <= a and pd <= d and pi <= i:
                            # calculate final atk/dmg/ied accounting for hypothetical WSE distribution
                            final_atk = atk + 0.09*pa + 0.12*(a-pa)
                            final_dmg = dmg + 0.4*pd + 0.3*(d-pd)
                            final_ied = calcIED([ied] + [0.4]*pi + [0.3]*(i-pi))
                            # calculate final damage %
                            FD = 100*calcFD(final_atk,final_dmg,final_ied,pdr)
                            # Debug print ignore
                            #print('%f %f %f %f' % (FD,final_atk,final_dmg,final_ied))
                            print('FD: %3.0f%%\tA/D/I: (%d, %d, %d)\tPrime: (%d, %d, %d)' % (FD,a,d,i,pa,pd,pi))
                            # Add rounded 3 decimal result into dict
                            while True:
                                # If result not in dict, add to dict
                                if FD not in table: 
                                    table[FD] = [(a,d,i),(pa,pd,pi)]
                                    break
                                # If result is in dict, add 1e-10
                                FD += 0.00000_00001
                            
sorted_fd = sorted(table, reverse=True)
print('================================================')
for i in range(display_top):
    print('Top %2d - FD: %3.0f%%\tA/D/I: %s\tPrime: %s' % (i+1,sorted_fd[i],table[sorted_fd[i]][0],table[sorted_fd[i]][1]))

