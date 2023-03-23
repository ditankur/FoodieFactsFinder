import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { HttpClient, HttpRequest, HttpEvent, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UploadService {
  constructor(private http: HttpClient) { }


  confirmDish(body:any): Observable<any> {
  
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer 60b7066beaa4a5e33d8d3ebbec837d665cba7a75',
      }),
    };
    const req = new HttpRequest('POST', `https://api.logmeal.es/v2/image/confirm/dish/v1.0?language=eng`, body, {
      ...httpOptions
    });
    let r  = 
    {
      body: {
        "recognition_results": [
            {
                "id": 168,
                "name": "pizza",
                "prob": 1
            }
        ],
        "source": "logmeal"
    }
  }
    return of({...r})
    // return this.http.request(req);

     
  }
  getNutritionInfo(body:any){
    console.log(body, 'getNutritionInfo');
    
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer 60b7066beaa4a5e33d8d3ebbec837d665cba7a75',
      }),
    };
    const req = new HttpRequest('POST', `https://api.logmeal.es/v2/nutrition/recipe/nutritionalInfo/v1.0?language=eng`, body, {
      ...httpOptions
    });
    let r  = {body :
    {
      "foodName": [
          "pizza"
      ],
      "hasNutritionalInfo": true,
      "ids": [
          168
      ],
      "imageId": 1492773,
      "nutritional_info": {
          "calories": 701.905,
          "dailyIntakeReference": {
              "CHOCDF": {
                  "label": "Carbs",
                  "level": "HIGH",
                  "percent": 44.98889313155774
              },
              "ENERC_KCAL": {
                  "label": "Energy",
                  "level": "NONE",
                  "percent": 34.10138122910032
              },
              "FASAT": {
                  "label": "Saturated fats",
                  "level": "MEDIUM",
                  "percent": 22.2485580235957
              },
              "FAT": {
                  "label": "Fat",
                  "level": "MEDIUM",
                  "percent": 27.15527578763352
              },
              "NA": {
                  "label": "Sodium",
                  "level": "HIGH",
                  "percent": 89.6403006
              },
              "PROCNT": {
                  "label": "Protein",
                  "level": "MEDIUM",
                  "percent": 21.66949764860833
              },
              "SUGAR": {
                  "label": "Sugars",
                  "level": "NONE",
                  "percent": 15.974416000000002
              },
              "SUGAR.added": {
                  "label": "Added sugars",
                  "level": "LOW",
                  "percent": 0
              }
          },
          "totalNutrients": {
              "CA": {
                  "label": "Calcium",
                  "quantity": 181.6475,
                  "unit": "mg"
              },
              "CHOCDF": {
                  "label": "Carbs",
                  "quantity": 104.17516499999999,
                  "unit": "g"
              },
              "CHOLE": {
                  "label": "Cholesterol",
                  "quantity": 22.396500000000003,
                  "unit": "mg"
              },
              "ENERC_KCAL": {
                  "label": "Energy",
                  "quantity": 701.905,
                  "unit": "kcal"
              },
              "F18D3CN3": {
                  "label": "alpha-linolenic acid (ALA)",
                  "quantity": 0,
                  "unit": "g"
              },
              "F20D5": {
                  "label": "Eicosapentaenoic acid (EPA)",
                  "quantity": 0,
                  "unit": "g"
              },
              "F22D6": {
                  "label": "Docosahexaenoic acid (DHA)",
                  "quantity": 0,
                  "unit": "g"
              },
              "FAMS": {
                  "label": "Monounsaturated fats",
                  "quantity": 12.049855500000001,
                  "unit": "g"
              },
              "FAPU": {
                  "label": "Polyunsaturated fats",
                  "quantity": 2.3045825000000004,
                  "unit": "g"
              },
              "FASAT": {
                  "label": "Saturated fats",
                  "quantity": 5.876892000000001,
                  "unit": "g"
              },
              "FAT": {
                  "label": "Fat",
                  "quantity": 21.736325,
                  "unit": "g"
              },
              "FATRN": {
                  "label": "Trans fat",
                  "quantity": 0,
                  "unit": "g"
              },
              "FE": {
                  "label": "Iron",
                  "quantity": 7.28394,
                  "unit": "mg"
              },
              "FIBTG": {
                  "label": "Fiber",
                  "quantity": 6.2965,
                  "unit": "g"
              },
              "FOLAC": {
                  "label": "Folic acid",
                  "quantity": 192.5,
                  "unit": "µg"
              },
              "FOLDFE": {
                  "label": "Folate equivalent (total)",
                  "quantity": 470.69949599999995,
                  "unit": "µg"
              },
              "FOLFD": {
                  "label": "Folate (food)",
                  "quantity": 143.19949599999998,
                  "unit": "µg"
              },
              "K": {
                  "label": "Potassium",
                  "quantity": 559.051,
                  "unit": "mg"
              },
              "MG": {
                  "label": "Magnesium",
                  "quantity": 54.040000000000006,
                  "unit": "mg"
              },
              "NA": {
                  "label": "Sodium",
                  "quantity": 1344.604509,
                  "unit": "mg"
              },
              "NIA": {
                  "label": "Niacin (B3)",
                  "quantity": 10.235968999999999,
                  "unit": "mg"
              },
              "P": {
                  "label": "Phosphorus",
                  "quantity": 294.194,
                  "unit": "mg"
              },
              "PROCNT": {
                  "label": "Protein",
                  "quantity": 22.301045,
                  "unit": "g"
              },
              "RIBF": {
                  "label": "Riboflavin (B2)",
                  "quantity": 0.9377355,
                  "unit": "mg"
              },
              "SUGAR": {
                  "label": "Sugars",
                  "quantity": 4.992005000000001,
                  "unit": "g"
              },
              "SUGAR.added": {
                  "label": "Added sugars",
                  "quantity": 0,
                  "unit": "g"
              },
              "THIA": {
                  "label": "Thiamin (B1)",
                  "quantity": 1.458925,
                  "unit": "mg"
              },
              "TOCPHA": {
                  "label": "Vitamin E",
                  "quantity": 3.8341150000000006,
                  "unit": "mg"
              },
              "VITA_RAE": {
                  "label": "Vitamin A",
                  "quantity": 79.01650000000001,
                  "unit": "µg"
              },
              "VITB12": {
                  "label": "Vitamin B12",
                  "quantity": 0.6491800000000001,
                  "unit": "µg"
              },
              "VITB6A": {
                  "label": "Vitamin B6",
                  "quantity": 0.24631450000000002,
                  "unit": "mg"
              },
              "VITC": {
                  "label": "Vitamin C",
                  "quantity": 8.677000000000001,
                  "unit": "mg"
              },
              "VITD": {
                  "label": "Vitamin D",
                  "quantity": 0.11340000000000001,
                  "unit": "µg"
              },
              "VITK1": {
                  "label": "Vitamin K",
                  "quantity": 14.674050000000001,
                  "unit": "µg"
              },
              "ZN": {
                  "label": "Zinc",
                  "quantity": 2.29547,
                  "unit": "mg"
              }
          }
      },
      "nutritional_info_per_item": [
          {
              "food_item_position": 1,
              "hasNutritionalInfo": true,
              "id": 168,
              "nutritional_info": {
                  "calories": 701.905,
                  "dailyIntakeReference": {
                      "CHOCDF": {
                          "label": "Carbs",
                          "level": "HIGH",
                          "percent": 44.98889313155774
                      },
                      "ENERC_KCAL": {
                          "label": "Energy",
                          "level": "NONE",
                          "percent": 34.10138122910032
                      },
                      "FASAT": {
                          "label": "Saturated fats",
                          "level": "MEDIUM",
                          "percent": 22.2485580235957
                      },
                      "FAT": {
                          "label": "Fat",
                          "level": "MEDIUM",
                          "percent": 27.15527578763352
                      },
                      "NA": {
                          "label": "Sodium",
                          "level": "HIGH",
                          "percent": 89.6403006
                      },
                      "PROCNT": {
                          "label": "Protein",
                          "level": "MEDIUM",
                          "percent": 21.66949764860833
                      },
                      "SUGAR": {
                          "label": "Sugars",
                          "level": "NONE",
                          "percent": 15.974416000000002
                      },
                      "SUGAR.added": {
                          "label": "Added sugars",
                          "level": "LOW",
                          "percent": 0
                      }
                  },
                  "totalNutrients": {
                      "CA": {
                          "label": "Calcium",
                          "quantity": 181.6475,
                          "unit": "mg"
                      },
                      "CHOCDF": {
                          "label": "Carbs",
                          "quantity": 104.17516499999999,
                          "unit": "g"
                      },
                      "CHOLE": {
                          "label": "Cholesterol",
                          "quantity": 22.396500000000003,
                          "unit": "mg"
                      },
                      "ENERC_KCAL": {
                          "label": "Energy",
                          "quantity": 701.905,
                          "unit": "kcal"
                      },
                      "F18D3CN3": {
                          "label": "alpha-linolenic acid (ALA)",
                          "quantity": 0,
                          "unit": "g"
                      },
                      "F20D5": {
                          "label": "Eicosapentaenoic acid (EPA)",
                          "quantity": 0,
                          "unit": "g"
                      },
                      "F22D6": {
                          "label": "Docosahexaenoic acid (DHA)",
                          "quantity": 0,
                          "unit": "g"
                      },
                      "FAMS": {
                          "label": "Monounsaturated fats",
                          "quantity": 12.049855500000001,
                          "unit": "g"
                      },
                      "FAPU": {
                          "label": "Polyunsaturated fats",
                          "quantity": 2.3045825000000004,
                          "unit": "g"
                      },
                      "FASAT": {
                          "label": "Saturated fats",
                          "quantity": 5.876892000000001,
                          "unit": "g"
                      },
                      "FAT": {
                          "label": "Fat",
                          "quantity": 21.736325,
                          "unit": "g"
                      },
                      "FATRN": {
                          "label": "Trans fat",
                          "quantity": 0,
                          "unit": "g"
                      },
                      "FE": {
                          "label": "Iron",
                          "quantity": 7.28394,
                          "unit": "mg"
                      },
                      "FIBTG": {
                          "label": "Fiber",
                          "quantity": 6.2965,
                          "unit": "g"
                      },
                      "FOLAC": {
                          "label": "Folic acid",
                          "quantity": 192.5,
                          "unit": "µg"
                      },
                      "FOLDFE": {
                          "label": "Folate equivalent (total)",
                          "quantity": 470.69949599999995,
                          "unit": "µg"
                      },
                      "FOLFD": {
                          "label": "Folate (food)",
                          "quantity": 143.19949599999998,
                          "unit": "µg"
                      },
                      "K": {
                          "label": "Potassium",
                          "quantity": 559.051,
                          "unit": "mg"
                      },
                      "MG": {
                          "label": "Magnesium",
                          "quantity": 54.040000000000006,
                          "unit": "mg"
                      },
                      "NA": {
                          "label": "Sodium",
                          "quantity": 1344.604509,
                          "unit": "mg"
                      },
                      "NIA": {
                          "label": "Niacin (B3)",
                          "quantity": 10.235968999999999,
                          "unit": "mg"
                      },
                      "P": {
                          "label": "Phosphorus",
                          "quantity": 294.194,
                          "unit": "mg"
                      },
                      "PROCNT": {
                          "label": "Protein",
                          "quantity": 22.301045,
                          "unit": "g"
                      },
                      "RIBF": {
                          "label": "Riboflavin (B2)",
                          "quantity": 0.9377355,
                          "unit": "mg"
                      },
                      "SUGAR": {
                          "label": "Sugars",
                          "quantity": 4.992005000000001,
                          "unit": "g"
                      },
                      "SUGAR.added": {
                          "label": "Added sugars",
                          "quantity": 0,
                          "unit": "g"
                      },
                      "THIA": {
                          "label": "Thiamin (B1)",
                          "quantity": 1.458925,
                          "unit": "mg"
                      },
                      "TOCPHA": {
                          "label": "Vitamin E",
                          "quantity": 3.8341150000000006,
                          "unit": "mg"
                      },
                      "VITA_RAE": {
                          "label": "Vitamin A",
                          "quantity": 79.01650000000001,
                          "unit": "µg"
                      },
                      "VITB12": {
                          "label": "Vitamin B12",
                          "quantity": 0.6491800000000001,
                          "unit": "µg"
                      },
                      "VITB6A": {
                          "label": "Vitamin B6",
                          "quantity": 0.24631450000000002,
                          "unit": "mg"
                      },
                      "VITC": {
                          "label": "Vitamin C",
                          "quantity": 8.677000000000001,
                          "unit": "mg"
                      },
                      "VITD": {
                          "label": "Vitamin D",
                          "quantity": 0.11340000000000001,
                          "unit": "µg"
                      },
                      "VITK1": {
                          "label": "Vitamin K",
                          "quantity": 14.674050000000001,
                          "unit": "µg"
                      },
                      "ZN": {
                          "label": "Zinc",
                          "quantity": 2.29547,
                          "unit": "mg"
                      }
                  }
              },
              "serving_size": 295.35
          }
      ],
      "serving_size": 295.35
  }
    }
  // return this.http.request(req);
    return of({...r})
  
    }

  upload(image: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('image', image);
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer 60b7066beaa4a5e33d8d3ebbec837d665cba7a75',
      }),
    };
    const req = new HttpRequest('POST', `https://api.logmeal.es/v2/image/segmentation/complete/v1.0?language=eng`, formData, {
      ...httpOptions
    });
    let r  =  {body :
    
   {"foodFamily":[{"id":1,"name":"meat","prob":0.59423828125}],"foodType":{"id":1,"name":"food"},"imageId":1492922,"model_versions":{"drinks":"v1.0","foodType":"v1.0","foodgroups":"v1.0","foodrec":"v1.0","ingredients":"v1.0","ontology":"v1.0","segmentation":"v1.0"},"occasion":"snack","processed_image_size":{"height":192,"width":262},"segmentation_results":[{"center":{"x":93,"y":98},"contained_bbox":{"h":99,"w":99,"x":44,"y":49},"food_item_position":1,"polygon":[66,49,62,53,61,53,49,65,48,65,45,68,45,69,44,70,44,89,45,90,45,91,46,92,46,93,45,94,45,98,46,99,46,107,47,108,47,112,48,113,48,115,49,116,49,118,50,119,50,120,51,121,51,122,53,124,54,124,55,125,57,125,58,126,60,126,61,127,62,127,65,130,66,130,69,133,69,134,70,135,70,136,73,139,75,139,76,140,77,140,78,141,79,141,81,143,82,143,83,144,84,144,87,147,114,147,115,146,116,146,117,145,120,145,121,144,125,144,126,143,128,143,132,139,132,138,133,137,133,136,134,135,134,134,136,132,136,129,137,128,136,127,136,124,135,123,135,122,133,120,133,118,132,117,133,116,133,114,135,112,138,112,138,111,139,110,139,108,140,107,140,106,142,104,142,99,141,98,141,97,139,95,139,94,135,94,134,93,133,93,132,92,127,92,126,91,125,91,124,90,123,90,122,89,121,89,117,85,116,85,115,84,114,84,111,81,110,81,106,77,105,77,103,75,103,73,102,72,102,71,101,70,101,69,100,68,100,65,99,64,99,60,98,59,98,58,97,57,97,55,96,54,96,53,95,52,95,51,94,50,90,50,89,49,85,49,84,50,83,49],"recognition_results":[{"foodFamily":[{"id":11,"name":"fried food"},{"id":20,"name":"tubers and derivatives"}],"foodType":{"id":1,"name":"food"},"id":306,"name":"french fries","prob":0.32498970070486644,"subclasses":[{"foodFamily":[{"id":11,"name":"fried food"},{"id":20,"name":"tubers and derivatives"}],"foodType":{"id":1,"name":"food"},"id":2488,"name":"potato french fries","prob":0.32498970070486644},{"foodFamily":[{"id":11,"name":"fried food"},{"id":20,"name":"tubers and derivatives"}],"foodType":{"id":1,"name":"food"},"id":2489,"name":"yuka fries","prob":0.32498970070486644},{"foodFamily":[{"id":11,"name":"fried food"},{"id":20,"name":"tubers and derivatives"}],"foodType":{"id":1,"name":"food"},"id":2266,"name":"sweet potato fries","prob":0.32498970070486644}]},{"foodFamily":[{"id":3,"name":"dairy products"},{"id":11,"name":"fried food"},{"id":20,"name":"tubers and derivatives"}],"foodType":{"id":1,"name":"food"},"id":394,"name":"poutine","prob":0.19413553243396364,"subclasses":[]},{"foodFamily":[{"id":11,"name":"fried food"},{"id":20,"name":"tubers and derivatives"}],"foodType":{"id":1,"name":"food"},"id":892,"name":"chips potatoes","prob":0.17219096493423391,"subclasses":[]},{"foodFamily":[{"id":8,"name":"vegetables"},{"id":11,"name":"fried food"}],"foodType":{"id":1,"name":"food"},"id":75,"name":"onion rings","prob":0.1617025809879466,"subclasses":[{"foodFamily":[{"id":8,"name":"vegetables"},{"id":13,"name":"soup"}],"foodType":{"id":1,"name":"food"},"id":252,"name":"garlic soup","prob":0.1617025809879466},{"foodFamily":[{"id":8,"name":"vegetables"}],"foodType":{"id":2,"name":"ingredients"},"id":2150,"name":"zilveruitjes","prob":0.1617025809879466},{"foodFamily":[{"id":8,"name":"vegetables"},{"id":13,"name":"soup"}],"foodType":{"id":1,"name":"food"},"id":487,"name":"french onion soup","prob":0.1617025809879466}]},{"foodFamily":[{"id":8,"name":"vegetables"},{"id":11,"name":"fried food"}],"foodType":{"id":1,"name":"food"},"id":2739,"name":"carrot fries","prob":0.14698122093898947,"subclasses":[{"foodFamily":[{"id":8,"name":"vegetables"}],"foodType":{"id":1,"name":"food"},"id":2738,"name":"roasted carrot","prob":0.14698122093898947},{"foodFamily":[{"id":8,"name":"vegetables"}],"foodType":{"id":2,"name":"ingredients"},"id":1236,"name":"carrot","prob":0.14698122093898947}]}]},{"center":{"x":180,"y":111},"contained_bbox":{"h":75,"w":92,"x":134,"y":74},"food_item_position":2,"polygon":[195,74,194,75,192,75,191,76,187,76,186,77,183,77,182,78,181,78,180,79,178,79,177,80,176,80,173,83,172,83,171,84,170,84,169,85,168,85,167,86,166,86,165,85,161,85,160,86,159,86,158,85,155,85,154,86,153,86,151,88,150,88,145,93,145,100,144,101,144,102,143,103,143,104,141,106,141,107,140,108,140,110,139,111,139,112,138,113,135,113,134,114,134,119,135,120,135,121,136,122,136,123,137,124,137,125,138,126,138,127,139,128,139,130,138,131,138,134,137,135,137,136,135,138,135,142,138,145,139,145,140,146,141,146,142,147,152,147,153,148,170,148,171,147,176,147,177,146,179,146,180,145,183,145,184,144,186,144,187,143,189,143,190,142,191,142,192,141,194,141,196,139,198,139,199,138,200,138,201,137,202,137,204,135,205,135,206,134,207,134,218,123,219,123,220,122,220,121,222,119,222,118,223,117,223,116,224,115,224,111,225,110,225,105,224,104,224,102,223,101,223,100,222,99,222,98,213,89,212,89,211,88,211,87,209,85,210,84,210,83,209,82,209,81,205,77,204,77,202,75,196,75],"recognition_results":[{"foodFamily":[{"id":9,"name":"fish"},{"id":22,"name":"legumes"}],"foodType":{"id":1,"name":"food"},"id":457,"name":"white bean with cod","prob":0.448642779587405,"subclasses":[]},{"foodFamily":[{"id":1,"name":"meat"},{"id":11,"name":"fried food"}],"foodType":{"id":1,"name":"food"},"id":1480,"name":"schnitzel","prob":0.16254071661237784,"subclasses":[{"foodFamily":[{"id":1,"name":"meat"},{"id":10,"name":"bread"},{"id":11,"name":"fried food"}],"foodType":{"id":1,"name":"food"},"id":2544,"name":"milanesa","prob":0.16254071661237784},{"foodFamily":[{"id":1,"name":"meat"},{"id":3,"name":"dairy products"},{"id":10,"name":"bread"},{"id":11,"name":"fried food"}],"foodType":{"id":1,"name":"food"},"id":888,"name":"cordon bleu","prob":0.16254071661237784},{"foodFamily":[{"id":1,"name":"meat"},{"id":11,"name":"fried food"}],"foodType":{"id":1,"name":"food"},"id":1499,"name":"vitello alla milanese","prob":0.16254071661237784}]},{"foodFamily":[{"id":1,"name":"meat"}],"foodType":{"id":1,"name":"food"},"id":114,"name":"pancetta","prob":0.14625407166123777,"subclasses":[{"foodFamily":[{"id":1,"name":"meat"}],"foodType":{"id":1,"name":"food"},"id":2105,"name":"bacon meat","prob":0.14625407166123777},{"foodFamily":[{"id":1,"name":"meat"}],"foodType":{"id":1,"name":"food"},"id":390,"name":"grilled bacon","prob":0.14625407166123777}]},{"foodFamily":[{"id":1,"name":"meat"}],"foodType":{"id":1,"name":"food"},"id":390,"name":"grilled bacon","prob":0.14625407166123777,"subclasses":[{"foodFamily":[{"id":1,"name":"meat"}],"foodType":{"id":1,"name":"food"},"id":2105,"name":"bacon meat","prob":0.14625407166123777}]},{"foodFamily":[{"id":1,"name":"meat"}],"foodType":{"id":1,"name":"food"},"id":686,"name":"baby back ribs","prob":0.09630836047774159,"subclasses":[]}]},{"center":{"x":167,"y":58},"contained_bbox":{"h":66,"w":132,"x":101,"y":25},"food_item_position":3,"polygon":[125,25,123,27,122,27,121,28,120,28,118,30,117,30,116,31,115,31,114,32,113,32,110,35,109,35,109,36,108,37,107,37,104,40,104,42,103,43,103,44,102,45,102,46,101,47,101,57,102,58,102,59,103,60,103,72,104,73,104,75,105,76,106,76,107,77,108,77,110,79,112,79,113,80,114,80,115,81,117,81,120,84,121,84,124,87,126,87,127,88,129,88,130,89,131,89,132,90,140,90,141,89,143,89,144,88,146,88,150,84,156,84,157,83,163,83,164,84,165,84,166,83,170,83,171,82,172,82,173,81,174,81,176,79,177,79,178,78,180,78,181,77,182,77,183,76,186,76,187,75,191,75,192,74,194,74,195,73,196,74,202,74,204,76,205,76,210,81,210,82,211,83,211,85,212,86,212,87,215,87,216,86,217,86,217,85,222,80,223,80,224,79,225,79,226,78,227,78,228,77,229,77,230,76,230,75,232,73,232,70,231,69,231,68,230,67,229,67,228,66,227,66,226,65,225,65,224,64,221,64,220,63,219,63,218,62,215,62,214,61,212,61,211,60,208,60,207,59,204,59,203,58,201,58,200,57,198,57,197,56,196,56,195,55,194,55,190,51,189,51,186,48,185,48,184,47,183,47,181,45,180,45,179,44,177,44,176,43,175,43,174,42,172,42,171,41,170,41,169,40,164,40,163,39,160,39,159,38,158,38,156,36,155,36,152,33,152,32,151,31,151,29,149,27,148,27,146,25],"recognition_results":[{"foodFamily":[{"id":1,"name":"meat"}],"foodType":{"id":1,"name":"food"},"id":317,"name":"steak","prob":0.31928134221375404,"subclasses":[{"foodFamily":[{"id":1,"name":"meat"}],"foodType":{"id":1,"name":"food"},"id":285,"name":"grilled entrecote","prob":0.31928134221375404}]},{"foodFamily":[{"id":1,"name":"meat"},{"id":10,"name":"bread"}],"foodType":{"id":1,"name":"food"},"id":147,"name":"hamburger","prob":0.22918566036112628,"subclasses":[{"foodFamily":[{"id":1,"name":"meat"}],"foodType":{"id":1,"name":"food"},"id":913,"name":"chicken burger","prob":0.22918566036112628},{"foodFamily":[{"id":8,"name":"vegetables"},{"id":22,"name":"legumes"}],"foodType":{"id":1,"name":"food"},"id":1467,"name":"vegetarian hamburger","prob":0.22918566036112628},{"foodFamily":[{"id":9,"name":"fish"}],"foodType":{"id":1,"name":"food"},"id":1468,"name":"fish hamburger","prob":0.22918566036112628}]},{"foodFamily":[{"id":1,"name":"meat"}],"foodType":{"id":1,"name":"food"},"id":408,"name":"grilled chicken","prob":0.151964591888034,"subclasses":[]},{"foodFamily":[{"id":1,"name":"meat"}],"foodType":{"id":1,"name":"food"},"id":903,"name":"grilled lamb","prob":0.15021205778954386,"subclasses":[{"foodFamily":[{"id":1,"name":"meat"},{"id":8,"name":"vegetables"}],"foodType":{"id":1,"name":"food"},"id":403,"name":"fried lamb with cumin","prob":0.15021205778954386},{"foodFamily":[{"id":1,"name":"meat"}],"foodType":{"id":1,"name":"food"},"id":2190,"name":"lamb","prob":0.15021205778954386},{"foodFamily":[{"id":1,"name":"meat"}],"foodType":{"id":1,"name":"food"},"id":790,"name":"baked lamb","prob":0.15021205778954386}]},{"foodFamily":[{"id":1,"name":"meat"},{"id":11,"name":"fried food"}],"foodType":{"id":1,"name":"food"},"id":95,"name":"fried chicken","prob":0.14935634774754197,"subclasses":[{"foodFamily":[{"id":1,"name":"meat"},{"id":11,"name":"fried food"}],"foodType":{"id":1,"name":"food"},"id":273,"name":"deep fried chicken wings","prob":0.14935634774754197},{"foodFamily":[{"id":1,"name":"meat"},{"id":11,"name":"fried food"}],"foodType":{"id":1,"name":"food"},"id":131,"name":"fried chicken drumsticks","prob":0.14935634774754197},{"foodFamily":[{"id":1,"name":"meat"},{"id":11,"name":"fried food"}],"foodType":{"id":1,"name":"food"},"id":1493,"name":"chicken nuggets","prob":0.14935634774754197}]}]}]}

    }
    return of({...r})
    // return this.http.request(req);
  }
}