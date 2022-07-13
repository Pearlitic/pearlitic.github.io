## Python Scripts Instrucitons

+ [WSE Optimizer](#wse-optimizer)
+ [Perfect Trinode Finder](#perfect-trinode-finder)

---

### Introduction

These are basic instructions on how to use the scripts. If you have some basic programming knowledge and know how to setup Python, this should be a piece of cake. If not, I'll try my best to explain. Basically the hardest part is figuring out how to setup a Python enviroment. After that, it's just follow the pattern.

---

### WSE Optimizer

There are 2 versions:

#### [Standard verison](https://github.com/Pearlitic/pearlitic.github.io/blob/main/Python/Maple_WSE_Calculator.py)

The 'casual' version that assumes 30% familiars and combines the resultant familiar count into WSE.

#### [Advanced Version](https://github.com/Pearlitic/pearlitic.github.io/blob/main/Python/Maple_WSE_Calculator_Advanced_Custom_Familiar.py)

The advanced version allows naming and customized familiars in the form of a dictionary. Well don't worry about the programming part, if you aren't completely programming-dumb and can follow patterns, you shouldn't have trouble editing it.

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

_Notice there's a duplicate 'CB' skill.
In this situation I recommend keeping all your trinodes until you get more, then run this script again with your updated list._
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

