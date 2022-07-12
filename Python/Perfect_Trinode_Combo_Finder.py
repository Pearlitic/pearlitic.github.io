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

# How many trinodes your class needs? (3 skills = 1 trinode)
trinode_count = 2

### === NO TOUCHY BELOW === ###

import itertools
from collections import Counter

def generate_node_combo(n_list, trinode_count):
    return list(itertools.combinations(range(0,len(n_list)), trinode_count*2))

node_combo = generate_node_combo(node_list,trinode_count)

valid_combo = []

for n in node_combo:
    temp_node_combo_sum = list(itertools.chain(*[node_list[x] for x in n]))
    result = dict(Counter(temp_node_combo_sum))
    if all([result[n] == 2 for n in result]):
        valid_combo += [[node_list[x] for x in n]]

print('Valid Trinode Sets :')

counter = 1
for combo in valid_combo:
    print('Set',counter,':')
    for sub_list in combo:
        print(sub_list)
    counter += 1
