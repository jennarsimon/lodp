import csv
import json
from dotenv import load_dotenv
import os
from dotenv import load_dotenv
load_dotenv()

def make_json(csvPath, jsonPath, data):

    output = {}

    with open(csvPath, encoding='utf-8-sig') as csvf:
        csvReader = csv.DictReader(csvf)
         
        for rows in csvReader:
            if data:    
                key = rows['Id']
                # Delete any unwanted elements from
                # final JSON object
                del rows['Id']
                del rows['ID']
                del rows['School']
                output[key] = rows
            else:
                output = rows

    with open(jsonPath, 'w', encoding='utf-8-sig') as jsonf:
        jsonf.write(json.dumps(output, indent=4))


if __name__ == "__main__":    
    
    # Get the database
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

    json_object = open(metadata_path, "r", encoding='utf-8-sig')
    final_data = json.load(json_object)

