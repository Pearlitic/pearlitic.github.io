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
```

Assigning numeric types to variables:
```py
# assigns interger value of 10 to the variable "variable_1"
variable_1 = 10

# assigns the sum of 1, 2, and 3 to "variable 2"
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

Character base [stats](https://github.com/Pearlitic/pearlitic.github.io/blob/main/%25/class_data.md) used by SuckHard's calculator. The 4% extra attack you see on classes is Will of the Hero skill.

There are 2 versions:

#### [Standard verison](https://github.com/Pearlitic/pearlitic.github.io/blob/main/Python/Maple_WSE_Calculator.py)

Open the file in your preferred text editor or IDE.

I will use my Kanna as an example.

Enter your character's base attack. This should be 0 for most classes.
```py
# Attack %: Enter amount of attack % from passives, soul, etc.
atk = 3 + 4 # mag soul 3% + Will of the Hero 4%
```

Enter dmg% + boss%:
```py
```

Enter IED% list:
```py
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
```

Enter how many familairs you want to optimize for.
```py
# number of familiars, assumes epic 30% boss or ied
fam = 0
```

Enter the number of prime lines you want to optmize on your WSE. Keep at 3 unless you have a reason not to.
```py
# number of prime lines (If you have Unique familiars, you can increase prime lines to account for them)
    # prime lines are calculated as 12%/40%/40% for atk/dmg/ied
    # non-prime are calculated as 9%/30%/30% for atk/dmg/ied
prime = 3
```

Enter the target boss's PDR. That's 300 for most end-game bosses. Saren is the first end-game boss that exceeds this (380).
```py
# target boss pdr % (most mid-game are 300%). https://github.com/Pearlitic/pearlitic.github.io/tree/main/%25
pdr = 300
```

Enter how many top results you want to display. I recommend keeping it at 10.
```py
# display top n results
display_top = 10
```

Would you like to see detailed final optimized % info? If yes, set value to `True`.
```py
#Display Detailed (final A/D/I%) Info?
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

#### [Advanced Version](https://github.com/Pearlitic/pearlitic.github.io/blob/main/Python/Maple_WSE_Calculator_Advanced_Custom_Familiar.py)

The advanced version allows naming and customized familiars in the form of a dictionary.

Follow the instructions of the Standard version. The only differences are:

You still enter the amount of familiars you want to optimize for, but instead of a 30% dmg/ied assumption, you can list out custom familairs. Follow the format to add/remove familairs `"Familiar_name": (atk%,boss%,ied%),` within the dictionary. You don't need a trailing comma on the last familiar line in the dictionary.
```py
# Familiar count to optimize for
fam_count = 3

# Familiar card list
fam_list = {
       # Please follow the format, keep the names short but memorable, and have at least 3 familairs.
       # If you don't have at least 3, you can just put something like "dummy_1": (0,0,0), to simulate a "useless" familiar.
       # Don't put more than 3 familiars of the same type to save compute time. Just put the best 3 of each boss/ied familairs you have.
       # Note: If you have 2-line IEDS, here's the cheat sheet: 30+30 = 51, 30+15 = 40.5, 20+15 = 32, 30+20 = 44, 20+20 = 36. If i didn't cover it calculate it yourself.
       # Last familiar line doesn't need an ending comma.
       # NO DUPLICATE NAMES!
     ### Format:
     # "Familiar_name": (atk%,boss%,ied%),
       "boogie_30b_1": (0,30,0),
       "ninja_30b_1": (0,30,0),
       "aranya_35b_1": (0,35,0),
       "rShad_20i_1": (0,0,20),
       "rShad_20i_2": (0,0,20),
       "cat_30i_1": (0,0,30)
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

---

### [Perfect Trinode Finder](https://github.com/Pearlitic/pearlitic.github.io/blob/main/Python/Perfect_Trinode_Combo_Finder.py)

When you open the file to edit, you will immediately see a list (array) at the beginning fo the file. This is your nodes list. Just follow the format and list out all your trinodes.

Here is an example for lets say, my Buccaneer. Notice I used short-hand or initials for the skill name to keep the list short and clean.
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

