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

There are 2 versions:

#### [Standard verison](https://github.com/Pearlitic/pearlitic.github.io/blob/main/Python/Maple_WSE_Calculator.py)

Open the file in your preferred text editor or IDE.

I will use my Kanna as an example.

Enter your character's base attack. This should be 0 for most classes.
```py
# Attack %: Enter amount of attack % from passives, soul, etc.
atk = 3 + 4 # mag soul 3% + Will of the Hero 4%
```

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

