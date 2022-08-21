node_list = [
    ###############################
    # Enter list of trinodes here, I recommend using skill initials to keep it short
    ['A','B','D'],
    ['D','A','F'],
    ['C','E','D'],
    ['A','E','F'],
    ['B','C','D'],
    ['F','E','A'],
    ['C','B','D'],
    ['E','D','A'] # No comma on last line
    ###############################
    ]

# How many trinodes your class needs? (3 skills = 1 trinode set)
trinode_set_count = 2

### === NO TOUCHY BELOW === ###

import itertools
from collections import Counter

# itertool generate all combo from node_list and input trinode count
def generate_node_combo(n_list, trinode_count):
    return list(itertools.combinations(range(0,len(n_list)), trinode_count*2))

node_combo = generate_node_combo(node_list,trinode_set_count)

# list/dict to store perfect / non-perfect trinode combos
valid_combo = []
non_perfect_combo = {}

# compensate score if result has less skills than intended skill count
def score_insufficient(trinode_set_count: int,result: dict):
    score = trinode_set_count*3 - len(result)
    score = min(trinode_set_count*3,score)
    score = max(score,0)
    return score
    
for n in node_combo:
    # concat current loaded combo
    temp_node_combo_concat = list(itertools.chain(*[node_list[x] for x in n]))
    # generate dict and count number each skill appears
    result = dict(Counter(temp_node_combo_concat))
    # case 1: result counts 2 for each skill
    if all([result[n] == 2 for n in result]):
        # add result to valid combo
        valid_combo += [[node_list[x] for x in n]]
    # case 2: result is not a perfect combo
    else:
        # calculate current combo quality score (lower = better)
        score = sum([1 for x in result.values() if not x==2]) + score_insufficient(trinode_set_count,result)
        # add combo (or create entry) to dict catagorized by quality score
        try:
            non_perfect_combo[score] += [[node_list[x] for x in n]]
        except:
            non_perfect_combo[score] = [[node_list[x] for x in n]]

# remove duplicate entries
result = [] 
[result.append(x) for x in valid_combo if x not in result] 
valid_combo = result

# print results
print('Valid Trinode Sets :')
# case 1: valid combo present
if valid_combo:
    counter = 1
    for combo in valid_combo:
        print('Set',counter,':')
        for sub_list in combo:
            print(sub_list)
        counter += 1
# case 2: no perfect combo, display best option (lowest quality score combo)
else:
    print('ERROR: No Perfect Trinode Sets, Displaying Next Best Option')
    best_score = sorted(non_perfect_combo.keys())[0]
    print('Listing Option(s) with', best_score, 'Missing Skill(s) :')
    counter = 1
    for combo in non_perfect_combo[best_score]:
        print('Imperfect Set',counter,':')
        for sub_list in combo:
            print(sub_list)
        counter += 1
