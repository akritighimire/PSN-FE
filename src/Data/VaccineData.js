const immunizationData = [
    {
      sn: 1,
      age: "Birth - 45 days",
      // vaccines: "B.C.G",
      vaccines:[{
        name: "BCG",
        immunizationAgainst: "Tuberculosis",
      schedule: "Single",
      numberOfDose: "Single",
      dueDate: "",
      givenDate: "",
      signature: ""
      }],
      
    },
    {
      sn: 2,
      age: "At Birth",
      // vaccine: "Hepatitis 'B'",
      vaccines:[{
        name: "Hepatitis 'B'",
        immunizationAgainst: "Hepatitis 'B'",
        schedule: "Booster",
        numberOfDose: "Booster",
        dueDate: "",
        givenDate: "",
        signature: ""
      }],
   
    },
    {
      sn: 3,
      age: "6 Weeks",

      vaccines: [
        {
          name: "DPT",
          immunizationAgainst: "Diphtheria, Pertussis, Tetanus",
          schedule: "6 Doses",
          numberOfDose: "1st",
          
        },
        {
          name: "Hib",
          immunizationAgainst: "Haemophilus Influenza b",
          schedule: "4 Doses",
          numberOfDose: "1st"
        },
        {
          name: "Hepatitis B",
          immunizationAgainst: "Hepatitis B",
          schedule: "5 Doses",
          numberOfDose: "1st"
        },
        {
          name: "Polio (Oral)",
          immunizationAgainst: "Poliomyelitis",
          schedule: "7 Doses",
          numberOfDose: "1st"
        },
        {
          name: "Hexaxim",
          immunizationAgainst: "(1+2+3+4)",
          schedule: "4 Doses",
          numberOfDose: "1st"
        },
        {
          name: "Pneumococcal 13",
          immunizationAgainst: "Pneumococcal Pneumonia",
          schedule: "4 Doses",
          numberOfDose: "1st"
        }
      ]
    },
    {
      sn: 4,
      age: "10 Weeks",
      vaccines: [
        {
          name: "DPT",
          immunizationAgainst: "Diphtheria, Pertussis, Tetanus",
          schedule: "6 Doses",
          numberOfDose: "2nd"
        },
        {
          name: "Hib",
          immunizationAgainst: "Haemophilus Influenza b",
          schedule: "4 Doses",
          numberOfDose: "2nd"
        },
        {
          name: "Hepatitis B",
          immunizationAgainst: "Hepatitis B",
          schedule: "5 Doses",
          numberOfDose: "2nd"
        },
        {
          name: "Polio (Oral)",
          immunizationAgainst: "Poliomyelitis",
          schedule: "7 Doses",
          numberOfDose: "2nd"
        },
        {
          name: "Hexaxim",
          immunizationAgainst: "(1+2+3+4)",
          schedule: "4 Doses",
          numberOfDose: "2nd"
        },
        {
          name: "Rota Virus",
          immunizationAgainst: "Rota Virus Infection",
          schedule: "4 Doses",
          numberOfDose: "1st"
        },
        {
          name: "Pneumococcal 13",
          immunizationAgainst: "Pneumococcal Pneumonia",
          schedule: "4 Doses",
          numberOfDose: "2nd"
        }
      ]
    },
    {
      sn: 5,
      age: "14 Weeks",
      vaccines: [
        {
          name: "DPT",
          immunizationAgainst: "Diphtheria, Pertussis, Tetanus",
          schedule: "6 Doses",
          numberOfDose: "3rd"
        },
        {
          name: "Hib",
          immunizationAgainst: "Haemophilus Influenza b",
          schedule: "4 Doses",
          numberOfDose: "3rd"
        },
        {
          name: "Hepatitis B",
          immunizationAgainst: "Hepatitis B",
          schedule: "5 Doses",
          numberOfDose: "3rd"
        },
        {
          name: "Polio (Oral)",
          immunizationAgainst: "Poliomyelitis",
          schedule: "7 Doses",
          numberOfDose: "3rd"
        },
        {
          name: "Hexaxim",
          immunizationAgainst: "(1+2+3+4)",
          schedule: "4 Doses",
          numberOfDose: "3rd"
        },
        {
          name: "Rota Virus",
          immunizationAgainst: "Rota Virus Infection",
          schedule: "4 Doses",
          numberOfDose: "2nd"
        },
        {
          name: "Polio (IPV)",
          immunizationAgainst: "Poliomyelitis",
          schedule: "Single",
          numberOfDose: "Single"
        },
        {
          name: "Pneumococcal 13",
          immunizationAgainst: "Pneumococcal Pneumonia",
          schedule: "4 Doses",
          numberOfDose: "3rd"
        }
      ]
    },
    {
      sn: 6,
      age: "6 Months",
      vaccines: [
        {
          name: "Influenza (Vaxigrip/Paed.)",
          immunizationAgainst: "Flu Infection",
          schedule: "6 Doses",
          numberOfDose: "1st"
        }
      ]
    },
    {
      sn: 7,
      age: "7 Months",
      vaccines: [
        {
          name: "Influenza (Vaxigrip/Paed.)",
          immunizationAgainst: "Flu Infection",
          schedule: "6 Doses",
          numberOfDose: "2nd"
        }
      ]
    },
    {
      sn: 8,
      age: "9 Months",
      vaccines: [
        {
          name: "PCV 10 (Synflorix)",
          immunizationAgainst: "Pneumonia",
          schedule: "3 Doses",
          numberOfDose: "3rd"
        },
        {
          name: "Measles",
          immunizationAgainst: "Measles",
          schedule: "Single",
          numberOfDose: "Single"
        },
        {
          name: "MR",
          immunizationAgainst: "Measles-Rubella",
          schedule: "Single",
          numberOfDose: "Single"
        },
        {
          name: "Menactra",
          immunizationAgainst: "Meningococcal Meningitis A,C,Y,W",
          schedule: "3 Doses",
          numberOfDose: "1st"
        }
      ]
    },
    {
      sn: 9,
      age: "12 Months",
      vaccines: [
        {
          name: "Pneumococcal 13",
          immunizationAgainst: "Pneumococcal Pneumonia",
          schedule: "4 Doses",
          numberOfDose: "4th"
        },
        {
          name: "Varicella",
          immunizationAgainst: "Chicken Pox",
          schedule: "2 Doses",
          numberOfDose: "1st"
        },
        {
          name: "JEV",
          immunizationAgainst: "Japanese Encephalitis",
          schedule: "Single",
          numberOfDose: "Single"
        },
        {
          name: "Oral Polio",
          immunizationAgainst: "Poliomyelitis",
          schedule: "7 Doses",
          numberOfDose: "4th"
        },
        {
          name: "Rota Virus",
          immunizationAgainst: "Rota Virus",
          schedule: "4 Doses",
          numberOfDose: "4th"
        },
        {
          name: "Menactra",
          immunizationAgainst: "Meningococcal Meningitis A,C,Y,W",
          schedule: "3 Doses",
          numberOfDose: "2nd"
        }
    ]},
        {
            sn: 10,
            age: "18 Months",
            vaccines: [
              {
                name: "MMR",
                immunizationAgainst: "Mumps, Measles, Rubella",
                schedule: "2 Doses",
                numberOfDose: "1st"
              },
              {
                name: "MR",
                immunizationAgainst: "Measles-Rubella",
                schedule: "2 Doses",
                numberOfDose: "1st"
              },
              {
                name: "DPT",
                immunizationAgainst: "Diphtheria, Pertussis, Tetanus",
                schedule: "6 Doses",
                numberOfDose: "4th"
              },
              {
                name: "Influenza (Vaxigrip/Paed.)",
                immunizationAgainst: "Flu Infection",
                schedule: "6 Doses",
                numberOfDose: "3rd"
              },
              {
                name: "Hib",
                immunizationAgainst: "Haemophilus Influenza b",
                schedule: "4 Doses",
                numberOfDose: "4th"
              },
              {
                name: "Hexaxim",
                immunizationAgainst: "Booster",
                schedule: "Booster",
                numberOfDose: "4th"
              }
            ]
          },
          {
            sn: 11,
            age: "24 Months",
            vaccines: [
              {
                name: "Hepatitis A",
                immunizationAgainst: "Hepatitis A",
                schedule: "2 Doses",
                numberOfDose: "2nd"
              },
              {
                name: "Typhoid",
                immunizationAgainst: "Typhoid",
                schedule: "5 Doses",
                numberOfDose: "3rd"
              },
              {
                name: "Oral Polio",
                immunizationAgainst: "Poliomyelitis",
                schedule: "7 Doses",
                numberOfDose: "5th"
              },
              {
                name: "Meningococcal A & C",
                immunizationAgainst: "Meningitis",
                schedule: "3 Doses",
                numberOfDose: "3rd"
              },
              {
                name: "Pneumococcal 13",
                immunizationAgainst: "Pneumococcal Pneumonia",
                schedule: "Booster Doses",
                numberOfDose: "Booster"
              },
              {
                name: "Menactra",
                immunizationAgainst: "Meningococcal Meningitis A, C, Y, W",
                schedule: "3 Doses",
                numberOfDose: "3rd"
              }
            ]
          },
          {
            sn: 12,
            age: "30 Months",
            vaccines: [
              {
                name: "Hepatitis A",
                immunizationAgainst: "Hepatitis A",
                schedule: "2 Doses",
                numberOfDose: "2nd"
              },
              {
                name: "Influenza (Vaxigrip/Paed.)",
                immunizationAgainst: "Flu Infection",
                schedule: "6 Doses",
                numberOfDose: "4th"
              },
            //   const immunizationData = [
                {
                  sn: 13,
                  age: "3 Years",
                  vaccines: [
                    {
                      name: "MMR",
                      immunizationAgainst: "Mumps, Measles, Rubella",
                      schedule: "2 Doses",
                      numberOfDose: "2nd"
                    },
                    {
                      name: "Oral Polio",
                      immunizationAgainst: "Poliomyelitis",
                      schedule: "7 Doses",
                      numberOfDose: "6th"
                    }
                  ]
                },
                {
                  sn: 14,
                  age: "4 Years",
                  vaccines: [
                    {
                      name: "Varicella",
                      immunizationAgainst: "Chicken Pox",
                      schedule: "2 Doses",
                      numberOfDose: "2nd"
                    },
                    {
                      name: "Influenza (Vaxigrip)",
                      immunizationAgainst: "Flu Infection",
                      schedule: "6 Doses",
                      numberOfDose: "5th"
                    }
                  ]
                },
                {
                  sn: 15,
                  age: "5 Years",
                  vaccines: [
                    {
                      name: "Typhoid",
                      immunizationAgainst: "Typhoid",
                      schedule: "5 Doses",
                      numberOfDose: "5th"
                    },
                    {
                      name: "Meningococcal A&C",
                      immunizationAgainst: "Meningitis",
                      schedule: "4 Doses",
                      numberOfDose: "2nd"
                    },
                    {
                      name: "Oral Polio",
                      immunizationAgainst: "Poliomyelitis",
                      schedule: "7 Doses",
                      numberOfDose: "7th"
                    },
                    {
                      name: "Influenza (Vaxigrip)",
                      immunizationAgainst: "Flu Infection",
                      schedule: "6 Doses",
                      numberOfDose: "6th"
                    },
                    {
                      name: "DT",
                      immunizationAgainst: "Diphtheria, Tetanus",
                      schedule: "6 Doses",
                      numberOfDose: "5th"
                    }
                  ]
                },
                {
                  sn: 16,
                  age: "6 Years",
                  vaccines: [
                    {
                      name: "Hepatitis B",
                      immunizationAgainst: "Hepatitis B",
                      schedule: "5 Doses",
                      numberOfDose: "4th"
                    }
                  ]
                },
                {
                  sn: 17,
                  age: "8 Years",
                  vaccines: [
                    {
                      name: "Typhoid",
                      immunizationAgainst: "Typhoid",
                      schedule: "5 Doses",
                      numberOfDose: "3rd"
                    },
                    {
                      name: "Meningococcal A&C",
                      immunizationAgainst: "Meningitis",
                      schedule: "4 Doses",
                      numberOfDose: "3rd"
                    }
                  ]
                },
                {
                  sn: 18,
                  age: "10 Years",
                  vaccines: [
                    {
                      name: "HPV for girls",
                      immunizationAgainst: "Human Papillomavirus",
                      schedule: "2 Doses",
                      numberOfDose: "1st"
                    }
                  ]
                },
                {
                  sn: 19,
                  age: "10.5 Years",
                  vaccines: [
                    {
                      name: "HPV for girls",
                      immunizationAgainst: "Human Papillomavirus",
                      schedule: "2 Doses",
                      numberOfDose: "2nd"
                    }
                  ]
                },
                {
                  sn: 20,
                  age: "11 Years",
                  vaccines: [
                    {
                      name: "Hepatitis B",
                      immunizationAgainst: "Hepatitis B",
                      schedule: "5 Doses",
                      numberOfDose: "5th"
                    },
                    {
                      name: "Typhoid",
                      immunizationAgainst: "Typhoid",
                      schedule: "5 Doses",
                      numberOfDose: "4th"
                    },
                    {
                      name: "Meningococcal A&C",
                      immunizationAgainst: "Meningitis",
                      schedule: "4 Doses",
                      numberOfDose: "3rd"
                    }
                  ]
                },
                {
                  sn: 21,
                  age: "14 Years",
                  vaccines: [
                    {
                      name: "Typhoid",
                      immunizationAgainst: "Typhoid",
                      schedule: "5 Doses",
                      numberOfDose: "5th"
                    },
                    {
                      name: "Meningococcal A&C",
                      immunizationAgainst: "Meningitis",
                      schedule: "4 Doses",
                      numberOfDose: "4th"
                    },
                    {
                      name: "DT",
                      immunizationAgainst: "Diphtheria, Tetanus",
                      schedule: "6 Doses",
                      numberOfDose: "6th"
                    }
                  ]
                }
                
              
            ]
    },
    {
      "sn": 13,
      "age": "3 Years",
      "vaccines": [
        {
          "name": "MMR",
          "immunizationAgainst": "Mumps, Measles, Rubella",
          "schedule": "2 Doses",
          "numberOfDose": "2nd",
          "dueDate": "",
          "givenDate": "",
          "signature": ""
        },
        {
          "name": "Oral Polio",
          "immunizationAgainst": "Poliomyelitis",
          "schedule": "7 Doses",
          "numberOfDose": "6th",
          "dueDate": "",
          "givenDate": "",
          "signature": ""
        }
      ]
    },
    {
      "sn": 14,
      "age": "4 Years",
      "vaccines": [
        {
          "name": "Varicella",
          "immunizationAgainst": "Chicken Pox",
          "schedule": "",
          "numberOfDose": "",
          "dueDate": "",
          "givenDate": "",
          "signature": ""
        },
        {
          "name": "Influenza (Vaxigrip)",
          "immunizationAgainst": "Flu Infection",
          "schedule": "6 Doses",
          "numberOfDose": "5th",
          "dueDate": "",
          "givenDate": "",
          "signature": ""
        }
      ]
    },
    {
      "sn": 15,
      "age": "5 Years",
      "vaccines": [
        {
          "name": "Typhoid",
          "immunizationAgainst": "Typhoid",
          "schedule": "5 Doses",
          "numberOfDose": "2nd",
          "dueDate": "",
          "givenDate": "",
          "signature": ""
        },
        {
          "name": "Meningococcal A&C",
          "immunizationAgainst": "Meningitis",
          "schedule": "4 Doses",
          "numberOfDose": "2nd",
          "dueDate": "",
          "givenDate": "",
          "signature": ""
        },
        {
          "name": "DT",
          "immunizationAgainst": "Diphtheria, Tetanus",
          "schedule": "6 Doses",
          "numberOfDose": "5th",
          "dueDate": "",
          "givenDate": "",
          "signature": ""
        }
      ]
    },
    {
      "sn": 16,
      "age": "6 Years",
      "vaccines": [
        {
          "name": "Hepatitis B",
          "immunizationAgainst": "Hepatitis B",
          "schedule": "5 Doses",
          "numberOfDose": "4th",
          "dueDate": "",
          "givenDate": "",
          "signature": ""
        }
      ]
    },
    {
      "sn": 17,
      "age": "8 Years",
      "vaccines": [
        {
          "name": "Typhoid",
          "immunizationAgainst": "Typhoid",
          "schedule": "5 Doses",
          "numberOfDose": "3rd",
          "dueDate": "",
          "givenDate": "",
          "signature": ""
        },
        {
          "name": "Meningococcal A&C",
          "immunizationAgainst": "Meningitis",
          "schedule": "4 Doses",
          "numberOfDose": "3rd",
          "dueDate": "",
          "givenDate": "",
          "signature": ""
        }
      ]
    },
    {
      "sn": 18,
      "age": "10 Years",
      "vaccines": [
        {
          "name": "HPV for girls",
          "immunizationAgainst": "Human Papillomavirus",
          "schedule": "2 Doses",
          "numberOfDose": "1st",
          "dueDate": "",
          "givenDate": "",
          "signature": ""
        }
      ]
    },
    {
      "sn": 19,
      "age": "10.5 Years",
      "vaccines": [
        {
          "name": "HPV for girls",
          "immunizationAgainst": "Human Papillomavirus",
          "schedule": "2 Doses",
          "numberOfDose": "2nd",
          "dueDate": "",
          "givenDate": "",
          "signature": ""
        }
      ]
    },
    {
      "sn": 20,
      "age": "11 Years",
      "vaccines": [
        {
          "name": "Hepatitis B",
          "immunizationAgainst": "Hepatitis B",
          "schedule": "5 Doses",
          "numberOfDose": "5th",
          "dueDate": "",
          "givenDate": "",
          "signature": ""
        },
        {
          "name": "Typhoid",
          "immunizationAgainst": "Typhoid",
          "schedule": "5 Doses",
          "numberOfDose": "4th",
          "dueDate": "",
          "givenDate": "",
          "signature": ""
        },
        {
          "name": "Meningococcal A&C",
          "immunizationAgainst": "Meningitis",
          "schedule": "4 Doses",
          "numberOfDose": "3rd",
          "dueDate": "",
          "givenDate": "",
          "signature": ""
        }
      ]
    },
    {
      "sn": 21,
      "age": "14 Years",
      "vaccines": [
        {
          "name": "Typhoid",
          "immunizationAgainst": "Typhoid",
          "schedule": "5 Doses",
          "numberOfDose": "5th",
          "dueDate": "",
          "givenDate": "",
          "signature": ""
        },
        {
          "name": "Meningococcal A&C",
          "immunizationAgainst": "Meningitis",
          "schedule": "4 Doses",
          "numberOfDose": "4th",
          "dueDate": "",
          "givenDate": "",
          "signature": ""
        },
        {
          "name": "DT",
          "immunizationAgainst": "Diphtheria, Tetanus",
          "schedule": "6 Doses",
          "numberOfDose": "6th",
          "dueDate": "",
          "givenDate": "",
          "signature": ""
        }
      ]
    }
  ];

  export default immunizationData;