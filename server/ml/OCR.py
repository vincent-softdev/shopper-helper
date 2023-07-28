import easyocr
import cv2
import numpy as np
import os

reader = easyocr.Reader(['en'], gpu= True)

#  Create a function to detect text and return text, bounding box and area of bbox
def detect_text(IMAGE_PATH):
    results = reader.readtext(IMAGE_PATH)
    new_results = []
    for result in results:
        result_list = list(result)
        top_left = result[0][0]
        bottom_right = result[0][2]
        length = abs(top_left[0] - bottom_right[0])
        width = abs(top_left[1] - bottom_right[1])
        area = length*width

        result_list.append(area)
        new_results.append(result_list)

    sorted_result = sorted(new_results, key=lambda x: x[3], reverse=True)

    return sorted_result[:4]

# Create function that draws bounding box around text
def draw_bbox (IMAGE_PATH):
  results = detect_text(IMAGE_PATH)
  img = cv2.imread(IMAGE_PATH)
  texts = []
  for detection in results:
    text = detection[1]
    #   top_left = tuple([int(x) for x in detection[0][0]])
    #   bottom_right = tuple([int(x) for x in detection[0][2]])
    #   text = tuple(detection[1])
    #   font = cv2.FONT_HERSHEY_SIMPLEX
    #   img = cv2.rectangle(img, top_left, bottom_right, (0, 255, 0), 5)
    #   img = cv2.putText(img, "".join(text), top_left, font, 2.5, (255,255,255), 2, cv2.LINE_AA)
    print(text)
    texts.append(text)

  return texts

# if '__name__'=='__main__':
#     x = input("Input Image Path")
#     draw_bbox(x)