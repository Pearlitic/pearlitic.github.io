## Python Scripts Instrucitons

+ [WSE Optimizer](#wse-optimizer)
+ [Perfect Trinode Finder](#perfect-trinode-finder)

---

### Introduction

These are basic instructions on how to use the scripts. If you have some basic programming knowledge and know how to setup Python, this should be a piece of cake. If not, I'll try my best to explain. Basically the hardest part is figuring out how to setup a Python enviroment. After that, it's just follow the pattern.

---

### Python Stuff

##### Setting Up Python Enviroment

<details>
  <summary>Click to expand!</summary>

The easiest way to run the scripts is to use an online IDE like [Online-Python](https://www.online-python.com/). You just need to save the code and edit it locally on your computer, then copy it over to the online IDE each time you wanna run the file.

[Spyder](https://www.spyder-ide.org/) is my favorite IDE and my preferred way to run the scripts locally. If you have no need to other packages (if you're reading this, you don't), you can just directly install it (if you do, install Spyder via Anaconda). It comes with its own Python enviroment so you don't need to do any complicated setup. [GitHub release page](https://github.com/spyder-ide/spyder/releases).

The last way is to manually install [Python](https://www.python.org/downloads/), and run the script via command line. If you plan to do this, you shouldn't be reading this as you already know how to do it.

</details>

##### Python Data Types

<details>
  <summary>Click to expand!</summary>

Just a short tutorial on how to properly format datatypes used in the scripts. Don't worry too much about the purpose/concept, just understand how to format them so your script doesn't spit out errors.

Comments:
```py
# this is a comment
variable_1 = 123 # this is also a comment, but written behind functional code
# variable_2 = 3 # Code that is commented-out are ignored (i.e. not read by the interpreter)
```

Assigning numeric types to variables:
```py
# assigns interger value of 6 to the variable "variable_1"
variable_1 = 6

# assigns the sum of 1, 2, and 3 (which is 6) to "variable 2"
variable_2 = 1 + 2 + 3

# same as above, but split to multiple lines
variable_2 = (1
              + 2
              + 3)
```

Assigning text (string) types to variables:
```py
text_var_1 = "text surrounded by double quotes denotes a string"
text_bar_2 = 'single quotes also work'
```

Assigning list (array) / tuple to variables:
```py
# assign a tuple of 3 elements -  1, 2, and 3 to "tuple_1" (tuples are similar to lists, but tuples are immutable)
tuple_1 = (1,2,3)

# assign a list of 3 elements -  1, 2, and 3 to "list_1"
list_1 = [1,2,3]
# same as above but across multiple lines
list_1 = [1,
          2,
          3]

# nesting lists within lists
nested_list = [
                ['these', 'are', '2', 'lists'],
                ['nested', 'within', 'a', 'list'] # remember last element doesn't need an ending comma
              ]
```

Assigning keys and values to a dictionary:
```py
# note: there CANNOT be duplicate keys within a dictionary!
dictionary = {'key': 'value', # you can store keys, each with a value within a dictionary
              'key_2': ('values', 'in', 'a', 'tuple'), # for example, a key named 'key_2' with a tuple as a value
              3: [1,2,3] # you can also store lists, or even use an integer as a key
              4: {'nested_dict_key': 123}, # or even store another dictionary as a value!
              5: 'final' # no ending comma on last line
              }
```

These should be all the editable datatypes intended for users to edit.

</details>

---

### WSE Optimizer

<details>
  <summary>Recommended Hidden Stats (Click to expand)</summary>

**_Likely Outdated_**. These are "hidden" stats that are not accounted for / not found in the stats window. See [stats](https://github.com/Pearlitic/pearlitic.github.io/blob/main/%25/class_data.md) used by SuckHard's calculator. The 4% extra attack you see on classes is Will of the Hero skill. The 20% IED is from Lv40 V skills. Some classes have a lot of bonus IED%/DMG%, these are not displayed in the stats window but are built into skills, such as the infamous Marksman's snipe.

</details>
  
There are 2 versions:

#### [Standard verison](https://github.com/Pearlitic/pearlitic.github.io/blob/main/Python/Maple_WSE_Calculator.py)

Open the file in your preferred text editor or IDE.

[Hidden/On-Hit values used by SuckHard's WSE Calculator](https://github.com/Pearlitic/pearlitic.github.io/blob/main/%25/class_data.md) for each class. You can choose to use it as-is, partially, or ignore it completely. In my opinion the values on his calculator tends to be on the liberal side, and I prefer to be conservative in my calculations.

I will use my Kanna as an example.

Enter your character's base attack. This should be 0 for most classes.
```py
atk = 3 + 4 # mag soul 3% + Will of the Hero 4%
```

Enter dmg% + boss%:
```py
dmg = (0 ##### No Touchy, starting dummy
       #################################
       + 86     # dmg%
       + 165    # boss%
       + 18     # Ark Lv3 link
       + 30     # Arcane Fan
       + 45     # bellflower
       #################################
       + 0)## No touchy, ending dummy
```

Enter IED% list:
```py
ied = [0,########################### No touchy, begin of array dummy
       #############################
       20,  # Legion Grid
       30,  # Hyper Stat Lv10
       30,  # Sup Gollux 4-set
       20,  # Luminous Link Lv3
       10,  # Absolab 4-set
       10,  # Ambition Lv100 Traiteee
       20,  # Clean Arcane Wep
       10,  # CRA hat
       5,   # CRA top
       5,   # CRA bot
       3,   # Familiar Badge
       5,   # Blaster Legion Lv140 Card
       5,   # BT Legion Lv140 Card
       5,   # Empress Medal
       5,   # CRA Title
       #############################
       9,   # Explorer Mage Link Skill Empirical Knowledge Max Stack Lv3
       # 20,  # V-Matrix Bossing Skill Lv40 Passive
       # 20,  # Hyper Bossing Skill Passive
       #############################
       0]########################### No touchy, end of array dummy
```

Enter how many familairs you want to optimize for.
```py
fam = 3
```

Enter the number of prime lines you want to optmize on your WSE. Keep at 3 unless you have a reason not to.
```py
prime = 3
```

Enter the target boss's PDR. That's 300 for most end-game bosses. Saren is the first end-game boss that exceeds this (380).
```py
pdr = 300
```

Enter how many top results you want to display. I recommend keeping it at 10.
```py
display_top = 10
```

Would you like to see detailed final optimized % info? If yes, set value to `True`.
```py
display_detailed = False
```

__Starting here are advanced options. Most of the time you won't need to modify them.__

Is your class one of those with odd WSE setups (e.g. Kanna)?

_For example, only ATK% is useful on Haku's fan, thus functionally I can only optimize to a max of 9 atk, 3 dmg, and 6 ied lines on my Kanna._
```py
## === ADVANCED OPTIONS === ##
# If you play a class with weird WSE, modify the max potential lines of you WSE:
max_wse_atk_lines = 9
max_wse_dmg_lines = 3
max_wse_ied_lines = 6
```

Don't touch this. Splits out every calculated result. Keep it off (`False`).
```py
# print all results? (only set True for debug purposes)
display_all = False
```

Lastly, run the script. The console should spit out something like this:

```py
Input Parameters:
ATK:      7%  DMG:      344%  IED:     88.1%
Familiars: 3  Prime Lines: 3  Boss PDR: 300%
===== Printing Top 10 Results =====
Top  1 - FD: 806%    A/D/I: (6, 4, 2)    Prime: (1, 0, 2)
Top  2 - FD: 806%    A/D/I: (7, 3, 2)    Prime: (0, 1, 2)
Top  3 - FD: 806%    A/D/I: (6, 4, 2)    Prime: (0, 1, 2)
Top  4 - FD: 805%    A/D/I: (7, 3, 2)    Prime: (1, 0, 2)
Top  5 - FD: 803%    A/D/I: (5, 5, 2)    Prime: (1, 0, 2)
Top  6 - FD: 802%    A/D/I: (8, 2, 2)    Prime: (0, 1, 2)
Top  7 - FD: 801%    A/D/I: (6, 4, 2)    Prime: (2, 0, 1)
Top  8 - FD: 801%    A/D/I: (7, 3, 2)    Prime: (0, 2, 1)
Top  9 - FD: 801%    A/D/I: (6, 4, 2)    Prime: (1, 1, 1)
Top 10 - FD: 800%    A/D/I: (5, 5, 2)    Prime: (0, 1, 2)
```

In this example, the best WSE optimization would be 6 Attack% lines, 4 Boss% lines, and 2 IED% lines. The ideal prime lines are 1 Attack and 2 IED%.

#### [Advanced Version](https://github.com/Pearlitic/pearlitic.github.io/blob/main/Python/Maple_WSE_Calculator_Advanced_Custom_Familiar.py)

The advanced version allows naming and customized familiars in the form of a dictionary.

Follow the instructions of the Standard version. The only differences are:

You still enter the amount of familiars you want to optimize for, but instead of a 30% dmg/ied assumption, you can list out custom familairs. Follow the format to add/remove familairs `"Familiar_name": (atk%,boss%,ied%),` within the dictionary. You don't need a trailing comma on the last familiar line in the dictionary. **Make sure you enter at least 3 familiars.** If you don't have 3, just use fill in a dummy `"Dummy_1": (0,0,0),`, but you shouldn't use this advanced script if you don't have 3+ familiars anyway, just summon them and optimize for WSE.
```py
# Familiar count to optimize for
fam_count = 3

# Familiar card list
fam_list = {
       # NO DUPLICATE NAMES!
     ### Format:
     # "Familiar_name": (atk%,boss%,ied%),
       "snek_30b": (0,30,0),
       "oda_30b": (0,30,0),
       "boogie_35i": (0,0,35),
       "sage_cat_30i": (0,0,30) # no comma on last line
       }
```

You can opt to display duplicate familiar results, or duplicate WSE setups if you'd like detailed results to compare between then. Otherwise keep off.

`allow_duplicate`: This allows different familairs, but with the same stat to be displayed. No point enabling this. (i.e. You got a familiar A and familiar B, both have 30% IED. Results with Familiar (A,C,D) and (B,C,D) will both be displayed, despite identical WSE and familiar bonuses.)

`allow_inferior`: This allows identical WSE setups but inferior familiar optimization combos to appear.

```py
# Allow duplicate familair effects? (Keep off unless you want to get duplicate results with same Final Damage but different familairs)
allow_duplicate = False

# Allow inferior familiar duplicate WSE setups? (Keep off unless you want dupe WSE setups but with weaker familiars)
allow_inferior = False
```

After running the script, you should get something like this:

```py
Input Parameters:
ATK:      7%  DMG:      344%  IED:     88.1%
Familiars: 3  Prime Lines: 3  Boss PDR: 300%
===== Printing Top 10 Results =====
Top  1 - FD: 811%    A/D/I: (6, 2, 1)    Prime: (2, 0, 1)
                     ⮡ Best Familairs: (snek_30b, oda_30b, boogie_35i)
                     ⮡ Final A/D/I (%): (67%, 463%, 95.37%)
Top  2 - FD: 811%    A/D/I: (6, 2, 1)    Prime: (1, 1, 1)
                     ⮡ Best Familairs: (snek_30b, oda_30b, boogie_35i)
                     ⮡ Final A/D/I (%): (63%, 473%, 95.37%)
Top  3 - FD: 810%    A/D/I: (7, 1, 1)    Prime: (1, 1, 1)
                     ⮡ Best Familairs: (snek_30b, oda_30b, boogie_35i)
                     ⮡ Final A/D/I (%): (73%, 443%, 95.37%)
Top  4 - FD: 810%    A/D/I: (6, 2, 1)    Prime: (0, 2, 1)
                     ⮡ Best Familairs: (snek_30b, oda_30b, boogie_35i)
                     ⮡ Final A/D/I (%): (61%, 484%, 95.37%)
Top  5 - FD: 809%    A/D/I: (7, 1, 1)    Prime: (2, 0, 1)
                     ⮡ Best Familairs: (snek_30b, oda_30b, boogie_35i)
                     ⮡ Final A/D/I (%): (76%, 434%, 95.37%)
Top  6 - FD: 808%    A/D/I: (5, 3, 1)    Prime: (2, 0, 1)
                     ⮡ Best Familairs: (snek_30b, oda_30b, boogie_35i)
                     ⮡ Final A/D/I (%): (58%, 493%, 95.37%)
Top  7 - FD: 806%    A/D/I: (5, 3, 1)    Prime: (1, 1, 1)
                     ⮡ Best Familairs: (snek_30b, oda_30b, boogie_35i)
                     ⮡ Final A/D/I (%): (55%, 503%, 95.37%)
Top  8 - FD: 806%    A/D/I: (6, 2, 1)    Prime: (1, 2, 0)
                     ⮡ Best Familairs: (snek_30b, boogie_35i, sage_cat_30i)
                     ⮡ Final A/D/I (%): (63%, 454%, 96.22%)
Top  9 - FD: 805%    A/D/I: (6, 1, 2)    Prime: (2, 1, 0)
                     ⮡ Best Familairs: (snek_30b, oda_30b, boogie_35i)
                     ⮡ Final A/D/I (%): (67%, 443%, 96.22%)
Top 10 - FD: 805%    A/D/I: (6, 1, 2)    Prime: (1, 1, 1)
                     ⮡ Best Familairs: (snek_30b, oda_30b, boogie_35i)
                     ⮡ Final A/D/I (%): (63%, 443%, 96.76%)
```

_The above sample has `display_detailed = True` enabled._

---

### [Perfect Trinode Finder](https://github.com/Pearlitic/pearlitic.github.io/blob/main/Python/Perfect_Trinode_Combo_Finder.py)

When you open the file to edit, you will immediately see a list (array) at the beginning fo the file. This is your nodes list. Just follow the format and list out all your trinodes.

Here is an example for lets say, my Buccaneer. Notice I used short-hand or initials for the skill name to keep the list short and clean. Remember to surround text with `'quotes'` since they are text (strings).
```py
node_list = [
    ###############################
    # Enter list of trinodes here, I recommend using skill initials to keep it short
    ['Octo','SA','SB'],
    ['CB','HB','NS'],
    ['SB','Octo','CB'],
    ['SB','NS','HB'],
    ['SB','CB','SA'],
    ['CB','HB','SA'],
    ['Octo','HB','CB'],
    ['HB','NS','Octo'] # No comma on last line
    ###############################
    ]
```
Next, edit the value for how many tri-node sets your class need. Each tri-node equals to 3 skills. For Bucc, it's 2 tri-node sets (6 skills for a total of 4 trinode pieces.)
```py
trinode_set_count = 2
```
Once the script is ran, the output looks something like this:
```
Valid Trinode Sets :
Set 1 :
['Octo', 'SA', 'SB']
['CB', 'HB', 'NS']
['SB', 'CB', 'SA']
['HB', 'NS', 'Octo']
```
In an unfortunate situation where there does not exist a tri-node combo, something like this will appear:

_Notice there's a duplicate 'CB' skill._

_In this situation I recommend keeping all your trinodes until you get more, then run this script again with your updated list._
```
Valid Trinode Sets :
ERROR: No Perfect Trinode Sets, Displaying Next Best Option
Listing Option(s) with 1 Missing Skill(s) :
Imperfect Set 1 :
['SB', 'Octo', 'CB']
['SB', 'CB', 'SA']
['CB', 'HB', 'SA']
['Octo', 'HB', 'CB']
```

---

