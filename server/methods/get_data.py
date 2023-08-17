import pandas as pd


def get_images(file: str, selected_columns: list[str]):
    # Assuming the file is uploaded directly and not inside any folder
    df = pd.read_csv(file)
    
    formatted_data = df.to_dict(orient='records')
    
    for item in formatted_data:
        print(item)

    return formatted_data