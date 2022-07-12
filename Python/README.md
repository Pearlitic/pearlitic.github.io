## Python Scripts

Here lives the random Maplestory related Python scripts.

Current Projects: 
+ [WSE Optimizer](#wse-optimizer)
+ [Perfect Trinode Finder](#perfect-trinode-finder)

---

### WSE Optimizer

There are 2 versions:

#### [Standard verison](https://github.com/Pearlitic/pearlitic.github.io/blob/main/Python/Maple_WSE_Calculator.py)

The 'casual' version that assumes 30% familiars and combines the resultant familiar count into WSE.

![casual](https://github.com/Pearlitic/pearlitic.github.io/blob/main/%25/Spyder.png)

#### [Advanced Version](https://github.com/Pearlitic/pearlitic.github.io/blob/main/Python/Maple_WSE_Calculator_Advanced_Custom_Familiar.py)

The advanced version allows naming and customized familiars in the form of a dictionary. Well don't worry about the programming part, if you aren't completely programming-dumb and can follow patterns, you shouldn't have trouble editing it.

The advanced one requires itertools plugin, which should be built-into Python.

![advanced](https://github.com/Pearlitic/pearlitic.github.io/blob/main/%25/Spyder2.png)

---

### [Perfect Trinode Finder](https://github.com/Pearlitic/pearlitic.github.io/blob/main/Python/Perfect_Trinode_Combo_Finder.py)

Simple script to find perfect trinode combination. If no perfect combo found, the next best option will be displayed.

Quick and dirty script with no input validation, so make sure you only input perfect trios with no typo!

Output looks something like this:
```
Valid Trinode Sets :
Set 1 :
['A', 'E', 'F']
['B', 'C', 'D']
['F', 'E', 'A']
['C', 'B', 'D']
```
or 
```
Valid Trinode Sets :
ERROR: No Perfect Trinode Sets, Displaying Next Best Option
Listing Option(s) with 1 Missing Skill(s) :
Imperfect Set 1 :
['A', 'B', 'D']
['C', 'E', 'D']
['B', 'C', 'D']
['E', 'D', 'A']
Imperfect Set 2 :
['A', 'B', 'D']
['C', 'E', 'D']
['C', 'B', 'D']
['E', 'D', 'A']
```

---

My favorite way to edit these are using the [Spyder IDE](https://www.spyder-ide.org/). Feel free to also use your own preferred IDE, text editor, or even an online IDE. If you don't know how to "install" Python onto your computer, probably download something like Spyder where it packages its own executable along.

Still a beginner programmer. If you find any error/bugs, do let me know.
