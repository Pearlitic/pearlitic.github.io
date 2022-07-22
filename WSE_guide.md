### Summary

The idea of optimizing WSE is to balance out the 3 main damage stats - Attack (a.k.a. ATK%, ATT%), Damage (a.k.a. DMG%, BOSS%, BOSSDMG%), and Ignore Enemy Defense (a.k.a. IED%, some old Maplers call this PDR but it's technically "wrong" as PDR refers to the boss's "percent damage reduction") to deal the most damage on bosses.

Note that for WSE, we treat Damage% and Boss Damage% as the same thing and add them together, as we are optimizing for boss damage and not regular mobs.

Some classes optimize for overall, while some classes want to optimize for WSE during burst. The gist is:

- Do not account for weapon, secondary, emblem potential
- List and add all ATK% sources
- List and add all DMG% sources
- List all IED sources (use a calculator calculate the combined IED%)
- Decide if I want to add party buffs or other time limited buffs to optimize for burst DPS, or just simply optimize for overall damage.
- Enter those values into calculator, and get the optimized WSE+familiar.

### How does IED & PDR Work?

All harder difficulty bosses have a PDR stat - Percent Damage Reduction. This induces a damage reduction on all incoming damage. To counter this, we have...

IED - a.k.a. Ignore Enemy Defense - to ignore a portion of PDR.

_Example: Most end-game bosses have 300% PDR. Let's say our character has 90% IED. If we ignore 90% of 300% (90% \* 300% = 270%), that leaves 30% PDR left on the boss. Thus, we deal 70% damage on the boss (boss reduces our damage by 30% - thus "percent damage reduction")._

Note that IED is not additive. 30% and 15% IED is not 45%, it's 40.5% (1 - (1 - 30%)\*(1 - 15%) = 40.5%). Basically, each new IED line only contributes to ignoring the remaining (100% - Current IED%). Just use an IED calculator if you didn't get that. My WSE optimizer also accepts multiple inputs seperated by commas to save you time from calculating it yourself.

_(Hopefully) Simple explanation of IED stacking: Lets say my stat page says I have 60% IED. This means the enemy still has 40% remaining. If i roll 30% IED on my weapon, instead of adding to the 60% and getting 90% IED, new IED lines only contributes to ignoring the remaining enemy defense. So the enemy still has 40%, if we ignore 30% of that, the enemy still has 28% left. This means our new IED is 72%._

### How much IED do I need?

Typical recommendations are minimums of 85% functional for CRA, 90% functional for Lomien, 92% functional for NLucid, and 93%+ visual (96%+ functional) for end-game. See [IED Table](https://pearlitic.github.io/%25/ied_table.html) for a pre-calculated overview.

Visual IED: Amount of IED your stat page displays,
Functional IED: If you have hidden IED sources that can consistantly apply while bossing, these sources on top of you 'visual' IED form your 'functional' IED.

### Stat Sources

Base ATK sources are commonly from: Weapon soul, skill buffs/passives, etc.

Base DMG sources are commonly from: DMG%/Boss% via skill passives/actives, Bonus DMG% on skills from passives/hypers, Debuffs, Link skills, etc.

Base IED sources are commonly from: Skill passives, Passive skills, Links, Debuffs, Lv40 Node, Skill's Hyper passives, etc.

While most sources show up on your stat window, some sources such as Mage link-skill debuff and Node Lv40 passive doesn't, so remember to account for those!

---

"On-hit" stats aren't calculated until "on-hit", such as skill node bonus (+20% IED @Lv40) on some skills, passive Hyper skill that provides bonus to your active skill, and active skill 'conditional' bonuses (e.g. Xenon's Snipe). These stats are not shown in the stat window as they only apply to specific skills, but you should account for them if it is your main bossing skill.

Note that some skills come with something like ""Passive: ""+XX% some stat"", these are actually treated like passive skills and are included in the stat window. However, when in doubt, just ask in your class Discord channel!

List of sources I can think of:

- Gear Stat (not potential, the base stats. e.g. CRA has 5% IED on the armor)
- Gear Set Bonuses
- Medals
- Titles
- Passive Skills
- Buff Skills
- Link Skills (Luminous, Explorer Mage, etc.)
- Passive Hyper Skill
- Hyper Stat
- Inner Ability (+20% DMG)
- V Node Bonuses (+20% IED @Lv40 for some skills)
- Active Skill "on-hit" Bonus
- Familiars (Can also be optimized with WSE, but if you only have a few good ones you can also treat them as "gear")
- Familiar Badge
- Soul (+3% ATK / +7% DMG / +7% IED)
- Legion (max +40% IED/DMG)
- Consumables

An easy and lazy way to find your IED and DMG is to equip a crap weapon with no potentials and use all your buffs. Use the values you get in the stat window as baseline, and then add the ""on-hit"" stats and other bonuses not accounted for in the stat window to your total."

### Q. I'm confused, is there an easy explanation on how to do this?

1. Unequip Weapon, Emblem, Secondary, then equip a level 10 crappy weapon (& crappy secondary if needed) with no potential. See step 16 for if you should summon familiars for steps 2-4.
2. Setup Legion and everything else to how you would battle bosses. Buff up.
3. Open you stats window. Start hitting dummy. Make all links/passives max stack.
4. Write down your Damage%, Boss Damage%, IED% displayed in the stat window.
5. If most of your bossing skills have 20% IED from V-Maxtrix Lv40 boost node bonus, write that number down behind IED. If only a few skills have innate IED, omit this step.
6. If your main bossing skills have IED% from Hyper skill, write that down behind IED.
7. If your main bossing skills have Boss Damage% from Hyper skill, write that down behind Boss Damage%.
8. Check your weapon and secondary. Ignoring existing potentials, do they have IED% and Boss Damage% stat on a clean weapon? If yes, write it down behind the respective stat.
9. When you took off the weapon/secondary, did you lose any set bonus (e.g. 30% Boss Damage)? If yes, write them down behind the respective stat.
10. Look through your skills. Do you see any ATK% bonus/passive/buffs? Most classes don't, so write down 0 or whatever bonus your class has for your ATK%.
11. Does your weapon have a soul that's ATK% / IED% / DMG%? If yes, write it down behind the respective stat.

12. Open the WSE Calculator
13. Add up all your ATK% you wrote down, and enter the value into the Attack (%) input field.
14. Add up all your Damage% and Boss Damage% that you wrote down (yes, add both Dmg% and Boss%). Enter that into the Damage (%) field.
15. Enter the list of IEDs that you wrote down seperated by commas. Example: "72,20,15,10" (without quotes).
16. Enter the amount of familiar slots you have. If you don't have any Epic and above IED/Boss familiars to fill in the slots, enter 0. Redo step 2-4 but summon the best familiars you have first, and update the numbers in step 4. Then re-enter values (step 13-15).
17. Open advanced option if you want to edit Prime Lines or Boss PDR (Seren has 380 PDR). Otherwise leave at default 300 for Lomien/Lucid/Will.
18. If you have a class with weird WSE that have limited potential, open advanced option and edit the max ATK/DMG/IED lines your WSE can get. Otherwise leave at default 9/6/9.
18. Voila! You got your optimization. For example, lets say you entered 2 familiars and got a result of "A/D/I: (5,4,2)  P: (1,0,2)". This means on your WSE you need 5 lines of ATK%, and the remaining lines plus familiar should have 4 DMG% and 2 IED%. So lets say you have 1 IED% and 1 Boss% Epic familiar, then your WSE will need to fit the remaining 3 DMG% and 1 IED%. 
19. Don'y worry about the "P: (1,0,2)". That's the Prime Line distribution. It's only for hard-core optimization end-game. See pics below, Final Damage% for even the top 10 configs are really, really close.

### Q. Recubing WSE is expersive. I just wanna optimize my familiar, can I do that? 

Yes, input ATK/DMG/IED but WITH your WSE equipped instead. If it tells you to use more IED lines, summon an IED familiar then update the input numbers. Rinse and repeat until you optimize for all 3. If at any point it tells you you need 0 DMG/IED and 9 ATK lines, increase the input ATK until it tells you either DMG or IED.
