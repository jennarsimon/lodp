import csv
import json
from dotenv import load_dotenv
import os
from dotenv import load_dotenv
load_dotenv()

def get_database():
    from pymongo import MongoClient
    import pymongo

    # Provide the mongodb atlas url to connect python to mongodb using pymongo
    CONNECTION_STRING = """mongodb://bw-tech-innovation:{password}@cluster0-shard-00-00.
    1fl5q.mongodb.net:27017,cluster0-shard-00-01.1fl5q.mongodb.net:27017,
    cluster0-shard-00-02.1fl5q.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=
    atlas-o8rmgo-shard-0&authSource=admin&retryWrites=true&w=majority""".format(password=os.getenv('PASS'))

    # Create a connection using MongoClient. You can import MongoClient or use pymongo.MongoClient
    from pymongo import MongoClient
    client = MongoClient(CONNECTION_STRING)

    # Create the database for our example (we will use the same database throughout the tutorial
    return client['lodp_datasets']

def make_json(csvPath, jsonPath, data):

    output = {}

    with open(csvPath, encoding='utf-8-sig') as csvf:
        csvReader = csv.DictReader(csvf)
         
        for rows in csvReader:
            if data:    
                key = rows['Id']
                output[key] = rows[1:]
            else:
                output = rows

    with open(jsonPath, 'w', encoding='utf-8-sig') as jsonf:
        jsonf.write(json.dumps(output, indent=4))


if __name__ == "__main__":    
    
    # Get the database
    dbname = get_database()
    csvPath1 = './princeton_review/princeton_review_data.csv'
    full_data_path = './princeton_review/princeton_review.json'

    make_json(csvPath1, full_data_path, True)

    csvPath2 = './princeton_review/princeton_review_meta.csv'
    metadata_path = './princeton_review/princeton_review_final.json'

    make_json(csvPath2, metadata_path, False)

    fd = open(full_data_path, "r", encoding='utf-8-sig')
    full_data = json.load(fd)

    with open(metadata_path, "r+", encoding='utf-8-sig') as file:
        metadata = json.load(file)
        metadata["Data"] = full_data
        file.seek(0)
        json.dump(metadata, file, indent=4)