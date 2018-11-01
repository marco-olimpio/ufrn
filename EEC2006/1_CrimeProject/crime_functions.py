def principal_crime_types(data):
    dic = {}
    for crime_desc in data:
        for sub_type in crime_desc:
            #remove spacing from begining/end and split by spaces
            words = sub_type.lstrip().rstrip().split(' ') 
            for word in words:
                if word not in dic:
                    dic[word] = {}
                else:
                    for w in words:
                        if w != word:
                            if w not in dic[word]:
                                dic[word][w] = 0
                            else:
                                dic[word][w] += 1
    return dic

def word_count(data):
    dic = {}
    for d in data:
        for word in d:
            if(word not in ('', ' ', '-')):
                if word not in dic:
                    dic[word] = 0
                else:
                    dic[word] += 1
    return dic
