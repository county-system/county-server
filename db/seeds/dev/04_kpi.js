exports.seed = async (knex) => {
  // Deletes ALL existing entries
  await knex("kpi").del();
  const kpiData = [
    {
      "department": "County Public Service Board",
      "indicators": "No. of County HR Employees recruited & Regularized",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": "70%",
      "financial_year":
        {
          "year": "2018/2021",
          "number": "70%"
        },
      "actual_achievement": 100
    },
    {
      "department": "County Public Service Board",
      "indicators": "No of interns recruited and deployed",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": 60,
      "financial_year":
        {
          "year": "2018/2021",
          "number": 60
        },
      "actual_achievement": 70
    },
    {
      "department": "Ministry Agriculture and  Livestock",
      "indicators": "No. of irrigation schemes expanded and rehabilitated",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": 15,
      "financial_year":
        {
          "year": "2018/2021",
          "number": 5
        },
      "actual_achievement": 3
    },
    {
      "department": "Ministry Agriculture and  Livestock",
      "indicators": "No.  of irrigation schemes utilizing drip technology",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": 4,
      "financial_year":
        {
          "year": "2018/2021",
          "number": 3
        },
      "actual_achievement": 0
    },
    {
      "department": "Ministry Agriculture and  Livestock",
      "indicators": "No. of Ha of reclaimed land under crop production",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": 20,
      "financial_year":
        {
          "year": "2018/2021",
          "number": 27
        },
      "actual_achievement": 167
    },
    {
      "department": "Ministry Agriculture and  Livestock",
      "indicators": "No.  of Ha of reclaimed land under pasture production",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": 10,
      "financial_year":
        {
          "year": "2018/2021",
          "number": 10
        },
      "actual_achievement": ""
    },
    {
      "department": "Ministry Agriculture and  Livestock",
      "indicators": "No.  of beneficiaries under SFSP programme",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": "91,000",
      "financial_year":
        {
          "year": "2018/2021",
          "number": "100,000"
        },
      "actual_achievement": 299214
    },
    {
      "department": "Ministry Agriculture and  Livestock",
      "indicators": "No. of community assets created and functional and in use by the community either for crop or pasture production",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": 186,
      "financial_year":
        {
          "year": "2018/2021",
          "number": 200
        },
      "actual_achievement": 71
    },
    {
      "department": "Ministry Agriculture and  Livestock",
      "indicators": "No. of supplementary feeds purchased",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": 3000,
      "financial_year":
        {
          "year": "2018/2021",
          "number": 2620
        },
      "actual_achievement": 9990
    },
    {
      "department": "Ministry Agriculture and  Livestock",
      "indicators": "No of Livestock restocked/destocked",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": 4000,
      "financial_year":
        {
          "year": "2018/2021",
          "number": 4000
        },
      "actual_achievement": 2620
    },
    {
      "department": "Ministry Agriculture and  Livestock",
      "indicators": "% of animals vaccinated and treated",
      "unit": "%",
      "baseline_year": 2017,
      "baseline_value": "65%",
      "financial_year":
        {
          "year": "2018/2021",
          "number": "75%"
        },
      "actual_achievement": 78.75
    },
    {
      "department": "Ministry Agriculture and  Livestock",
      "indicators": "Quantity of fish sold",
      "unit": "MT",
      "baseline_year": 2017,
      "baseline_value": 7468,
      "financial_year":
        {
          "year": "2018/2021",
          "number": 8290
        },
      "actual_achievement": 10200
    },
    {
      "department": "Ministry of Education, Sports And Social Protection",
      "indicators": "Number of ECD centers supplied with food",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": 795,
      "financial_year":
        {
          "year": "2018/2021",
          "number": 875
        },
      "actual_achievement": 900
    },
    {
      "department": "Ministry of Education, Sports And Social Protection",
      "indicators": "Number of Classrooms constructed",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": 795,
      "financial_year":
        {
          "year": "2018/2021",
          "number": 875
        },
      "actual_achievement": 26
    },
    {
      "department": "Ministry of Education, Sports And Social Protection",
      "indicators": "Number of students accessing funds",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": 5000,
      "financial_year":
        {
          "year": "2018/2021",
          "number": "30,000"
        },
      "actual_achievement": "35,580"
    },
    {
      "department": "Ministry of Education, Sports And Social Protection",
      "indicators": "Number of Classrooms constructed",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": 6,
      "financial_year":
        {
          "year": "2018/2021",
          "number": 3
        },
      "actual_achievement": ""
    },
    {
      "department": "Ministry of Education, Sports And Social Protection",
      "indicators": "Number of twin workshops constructed",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": 6,
      "financial_year":
        {
          "year": "2018/2021",
          "number": 2
        },
      "actual_achievement": 1
    },
    {
      "department": "Ministry of Education, Sports And Social Protection",
      "indicators": "Number of VTC centers supplied with instructional materials",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": 6,
      "financial_year":
        {
          "year": "2018/2021",
          "number": 8
        },
      "actual_achievement": 2
    },
    {
      "department": "Ministry of Education, Sports And Social Protection",
      "indicators": "Number of PLWDs county and national sport events participated in annually",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": 2,
      "financial_year":
        {
          "year": "2018/2021",
          "number": 2
        },
      "actual_achievement": 2
    },
    {
      "department": "Ministry of Education, Sports And Social Protection",
      "indicators": "Number of PLWDs supported and trained on entrepreneurial skills",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": 0,
      "financial_year":
        {
          "year": "2018/2021",
          "number": 50
        },
      "actual_achievement": 0
    },
    {
      "department": "Ministry of Education, Sports And Social Protection",
      "indicators": "Number of athletes supported",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": 11,
      "financial_year":
        {
          "year": "2018/2021",
          "number": 50
        },
      "actual_achievement": 124
    },
    {
      "department": "Ministry of Education, Sports And Social Protection",
      "indicators": "Number of annual Kenya youth inter-counties ball games organized",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": 1,
      "financial_year":
        {
          "year": "2018/2021",
          "number": 1
        },
      "actual_achievement": 1
    },
    {
      "department": "Ministry of Finance And Economic Planning",
      "indicators": "No. of unqualified Reports",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": 0,
      "financial_year":
        {
          "year": "2018/2021",
          "number": 1
        },
      "actual_achievement": 0
    },
    {
      "department": "Ministry of Finance And Economic Planning",
      "indicators": "Amount of Own Source revenue",
      "unit": "Kshs.",
      "baseline_year": 2017,
      "baseline_value": "",
      "financial_year":
        {
          "year": "2018/2021",
          "number": ""
        },
      "actual_achievement": ""
    },
    {
      "department": "Ministry of Finance And Economic Planning",
      "indicators": "Annual Financial Report Published",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": 1,
      "financial_year":
        {
          "year": "2018/2021",
          "number": 1
        },
      "actual_achievement": 1
    },
    {
      "department": "Ministry of Finance And Economic Planning",
      "indicators": "% of County Assets insured",
      "unit": "%",
      "baseline_year": 2017,
      "baseline_value": 0.1,
      "financial_year":
        {
          "year": "2018/2021",
          "number": 30
        },
      "actual_achievement": ""
    },
    {
      "department": "Ministry of Finance And Economic Planning",
      "indicators": "No of operational sub-county treasuries",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": 0,
      "financial_year":
        {
          "year": "2018/2021",
          "number": 0
        },
      "actual_achievement": 0
    },
    {
      "department": "Ministry of Finance And Economic Planning",
      "indicators": "Amount of donor funds obtained as a percentage of the Equitable Share.",
      "unit": "Kshs.",
      "baseline_year": 2017,
      "baseline_value": "2%",
      "financial_year":
        {
          "year": "2018/2021",
          "number": "5%"
        },
      "actual_achievement": ""
    },
    {
      "department": "Ministry of Finance And Economic Planning",
      "indicators": "Policy documents formulated",
      "unit": "No.",
      "baseline_year": "",
      "baseline_value": "",
      "financial_year":
        {
          "year": "2018/2021",
          "number": ""
        },
      "actual_achievement": ""
    },
    {
      "department": "Ministry of Finance And Economic Planning",
      "indicators": "No. Sectoral Plans Prepared",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": 0,
      "financial_year":
        {
          "year": "2018/2021",
          "number": 0
        },
      "actual_achievement": ""
    },
    {
      "department": "Ministry of Finance And Economic Planning",
      "indicators": "CIDP",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": 1,
      "financial_year":
        {
          "year": "2018/2021",
          "number": 1
        },
      "actual_achievement": 1
    },
    {
      "department": "Ministry of Finance And Economic Planning",
      "indicators": "ADP prepared",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": 5,
      "financial_year":
        {
          "year": "2018/2021",
          "number": 1
        },
      "actual_achievement": 1
    },
    {
      "department": "Ministry of Finance And Economic Planning",
      "indicators": "Sub-county development co-ordination committee's formed",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": 0,
      "financial_year":
        {
          "year": "2018/2021",
          "number": 7
        },
      "actual_achievement": 0
    },
    {
      "department": "Ministry of Finance And Economic Planning",
      "indicators": "SIR reports generated from real time system",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": 2,
      "financial_year":
        {
          "year": "2018/2021",
          "number": 1
        },
      "actual_achievement": 0
    },
    {
      "department": "Ministry of Finance And Economic Planning",
      "indicators": "M&E policy framework and bill Formulated",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": 0,
      "financial_year":
        {
          "year": "2018/2021",
          "number": 0
        },
      "actual_achievement": 0
    },
    {
      "department": "Ministry of Finance And Economic Planning",
      "indicators": "CIDP Indicator handbook developed",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": 1,
      "financial_year":
        {
          "year": "2018/2021",
          "number": 0
        },
      "actual_achievement": 0
    },
    {
      "department": "Ministry of Finance And Economic Planning",
      "indicators": "No. of Staff trained on Result Based Monitoring and Evaluation.",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": 2,
      "financial_year":
        {
          "year": "2018/2021",
          "number": 6
        },
      "actual_achievement": 4
    },
    {
      "department": "Ministry of Finance And Economic Planning",
      "indicators": "No. of M & E reports prepared and implemented.",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": 16,
      "financial_year":
        {
          "year": "2018/2021",
          "number": 4
        },
      "actual_achievement": 4
    },
    {
      "department": "Ministry of Finance And Economic Planning",
      "indicators": "Efficiency in revenue Collection",
      "unit": "%",
      "baseline_year": 2017,
      "baseline_value": "60%",
      "financial_year":
        {
          "year": "2018/2021",
          "number": "60%"
        },
      "actual_achievement": 1
    },
    {
      "department": "Ministry of Finance And Economic Planning",
      "indicators": "Consolidated Procurement Plan",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": 1,
      "financial_year":
        {
          "year": "2018/2021",
          "number": 1
        },
      "actual_achievement": ""
    },
    {
      "department": "Ministry of Finance And Economic Planning",
      "indicators": "% of Projects completed on time and within budget",
      "unit": "%",
      "baseline_year": 2017,
      "baseline_value": "70%",
      "financial_year":
        {
          "year": "2018/2021",
          "number": "70%"
        },
      "actual_achievement": 100
    },
    {
      "department": "Ministry of Finance And Economic Planning",
      "indicators": "No of suppliers/contractors trained on project management and execution",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": 100,
      "financial_year":
        {
          "year": "2018/2021",
          "number": 100
        },
      "actual_achievement": 1
    },
    {
      "department": "Ministry of Finance And Economic Planning",
      "indicators": "Updated County Asset register",
      "unit": "",
      "baseline_year": 2017,
      "baseline_value": "",
      "financial_year":
        {
          "year": "2018/2021",
          "number": 1
        },
      "actual_achievement": 1
    },
    {
      "department": "Ministry of Health and Sanitation",
      "indicators": "Proportion of community health volunteers trained and practicing IPC",
      "unit": "",
      "baseline_year": 2017,
      "baseline_value": 0,
      "financial_year":
        {
          "year": "2018/2021",
          "number": "10%"
        },
      "actual_achievement": 0
    },
    {
      "department": "Ministry of Health and Sanitation",
      "indicators": "Proportion of the population covered by health insurance",
      "unit": "%",
      "baseline_year": 2017,
      "baseline_value": "9,000",
      "financial_year":
        {
          "year": "2018/2021",
          "number": "30%"
        },
      "actual_achievement": 0
    },
    {
      "department": "Ministry of Health and Sanitation",
      "indicators": "% of Fully Immunized Child coverage.",
      "unit": "%",
      "baseline_year": 2017,
      "baseline_value": "67%",
      "financial_year":
        {
          "year": "2018/2021",
          "number": "70%"
        },
      "actual_achievement": "88%"
    },
    {
      "department": "Ministry of Health and Sanitation",
      "indicators": "% Skilled deliveries coverage at birth",
      "unit": "%",
      "baseline_year": 2017,
      "baseline_value": "47%",
      "financial_year":
        {
          "year": "2018/2021",
          "number": "50%"
        },
      "actual_achievement": "73%"
    },
    {
      "department": "Ministry of Health and Sanitation",
      "indicators": "Proportion of maternal and peri-natal deaths audited",
      "unit": "%",
      "baseline_year": 2017,
      "baseline_value": "90%",
      "financial_year":
        {
          "year": "2018/2021",
          "number": "100%"
        },
      "actual_achievement": "85.70%"
    },
    {
      "department": "Ministry of Health and Sanitation",
      "indicators": "% Family planning coverage for women of childbearing age",
      "unit": "%",
      "baseline_year": 2017,
      "baseline_value": "15%",
      "financial_year":
        {
          "year": "2018/2021",
          "number": "18%"
        },
      "actual_achievement": "17.60%"
    },
    {
      "department": "Ministry of Health and Sanitation",
      "indicators": "Under 5 mortality rates",
      "unit": "/000",
      "baseline_year": 2017,
      "baseline_value": 2.24,
      "financial_year":
        {
          "year": "2018/2021",
          "number": ""
        },
      "actual_achievement": "0.20%"
    },
    {
      "department": "Ministry of Health and Sanitation",
      "indicators": "Maternal mortality rate",
      "unit": "/00,000",
      "baseline_year": 2017,
      "baseline_value": 82.82,
      "financial_year":
        {
          "year": "2018/2021",
          "number": ""
        },
      "actual_achievement": "23/100000"
    },
    {
      "department": "Ministry of Health and Sanitation",
      "indicators": "HIV/AIDS prevalence rate",
      "unit": "%",
      "baseline_year": 2017,
      "baseline_value": "14.64%",
      "financial_year":
        {
          "year": "2018/2021",
          "number": "10%"
        },
      "actual_achievement": "7.90%"
    },
    {
      "department": "Ministry of Health and Sanitation",
      "indicators": "Patients on ARVs",
      "unit": "%",
      "baseline_year": 2017,
      "baseline_value": "51.33%",
      "financial_year":
        {
          "year": "2018/2021",
          "number": "57%"
        },
      "actual_achievement": "37.60%"
    },
    {
      "department": "Ministry of Lands, Energy,Housing And Urban area Manangement",
      "indicators": "Percentage of participants trained on Land Management and Government.",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": "10%",
      "financial_year":
        {
          "year": "2018/2021",
          "number": "20%"
        },
      "actual_achievement": ""
    },
    {
      "department": "Ministry of Lands, Energy,Housing And Urban area Manangement",
      "indicators": "Number of land disputes resolved",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": "",
      "financial_year":
        {
          "year": "2018/2021",
          "number": ""
        },
      "actual_achievement": ""
    },
    {
      "department": "Ministry of Lands, Energy,Housing And Urban area Manangement",
      "indicators": "Percentage of land surveyed/Registered in the county per category (Private /Community land)- No of titles issued",
      "unit": "%",
      "baseline_year": 2017,
      "baseline_value": "0%",
      "financial_year":
        {
          "year": "2018/2021",
          "number": "50%"
        },
      "actual_achievement": ""
    },
    {
      "department": "Ministry of Lands, Energy,Housing And Urban area Manangement",
      "indicators": "% of County Spatial Plan done",
      "unit": "%",
      "baseline_year": 2017,
      "baseline_value": "0%",
      "financial_year":
        {
          "year": "2018/2021",
          "number": "30%"
        },
      "actual_achievement": ""
    },
    {
      "department": "Ministry of Lands, Energy,Housing And Urban area Manangement",
      "indicators": "No of towns with spatial plans",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": 9,
      "financial_year":
        {
          "year": "2018/2021",
          "number": 2
        },
      "actual_achievement": ""
    },
    {
      "department": "Ministry of Lands, Energy,Housing And Urban area Manangement",
      "indicators": "Spatial planning for   fragile areas (Lake Turkana beach areas and grazing lands",
      "unit": "%",
      "baseline_year": 2017,
      "baseline_value": "10%",
      "financial_year":
        {
          "year": "2018/2021",
          "number": "30%"
        },
      "actual_achievement": ""
    },
    {
      "department": "Ministry of Lands, Energy,Housing And Urban area Manangement",
      "indicators": "% of Facilities electrified",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": "98%",
      "financial_year":
        {
          "year": "2018/2021",
          "number": "30%"
        },
      "actual_achievement": ""
    },
    {
      "department": "Ministry of Lands, Energy,Housing And Urban area Manangement",
      "indicators": "No of Facilities repaired",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": 0,
      "financial_year":
        {
          "year": "2018/2021",
          "number": 20
        },
      "actual_achievement": ""
    },
    {
      "department": "Ministry of Lands, Energy,Housing And Urban area Manangement",
      "indicators": "No. of towns with streetlights",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": 10,
      "financial_year":
        {
          "year": "2018/2021",
          "number": 4
        },
      "actual_achievement": ""
    },
    {
      "department": "Ministry of Lands, Energy,Housing And Urban area Manangement",
      "indicators": "Number of institutions installed with institutional stoves",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": 5,
      "financial_year":
        {
          "year": "2018/2021",
          "number": 14
        },
      "actual_achievement": ""
    },
    {
      "department": "Ministry of Lands, Energy,Housing And Urban area Manangement",
      "indicators": "County Energy bill in place",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": 0,
      "financial_year":
        {
          "year": "2018/2021",
          "number": 1
        },
      "actual_achievement": ""
    },
    {
      "department": "Ministry of Lands, Energy,Housing And Urban area Manangement",
      "indicators": "No. of car parks in urban centers",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": 0,
      "financial_year":
        {
          "year": "2018/2021",
          "number": 3
        },
      "actual_achievement": ""
    },
    {
      "department": "Ministry of Lands, Energy,Housing And Urban area Manangement",
      "indicators": "Number of waste management sites developed in the following towns: Lokori, Lokichar, Kalokol, Lorugum, Kakuma, Lokichoggio, Lowarengak, Kainuk and Lokitaung",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": 0,
      "financial_year":
        {
          "year": "2018/2021",
          "number": 2
        },
      "actual_achievement": ""
    },
    {
      "department": "Ministry of Lands, Energy,Housing And Urban area Manangement",
      "indicators": "No. of functional sewerage systems in place",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": 0,
      "financial_year":
        {
          "year": "2018/2021",
          "number": 0
        },
      "actual_achievement": ""
    },
    {
      "department": "Ministry of Lands, Energy,Housing And Urban area Manangement",
      "indicators": "No. of baraza parks established",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": 0,
      "financial_year":
        {
          "year": "2018/2021",
          "number": 2
        },
      "actual_achievement": ""
    },
    {
      "department": "Ministry of Lands, Energy,Housing And Urban area Manangement",
      "indicators": "No. of urban centers earmarked for beatification",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": 0,
      "financial_year":
        {
          "year": "2018/2021",
          "number": 2
        },
      "actual_achievement": ""
    },
    {
      "department": "Ministry of Lands, Energy,Housing And Urban area Manangement",
      "indicators": "Functional Municipality in place",
      "unit": "%",
      "baseline_year": 2017,
      "baseline_value": "0%",
      "financial_year":
        {
          "year": "2018/2021",
          "number": "20%"
        },
      "actual_achievement": ""
    },
    {
      "department": "Ministry of Lands, Energy,Housing And Urban area Manangement",
      "indicators": "No. of low-cost houses constructed in sub- counties",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": 0,
      "financial_year":
        {
          "year": "2018/2021",
          "number": 2
        },
      "actual_achievement": ""
    },
    {
      "department": "MINISTRY OF PUBLIC SERVICE, ADMINISTRATION AND DISASTER MANAGEMENT",
      "indicators": "Number of skill audit",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": 0,
      "financial_year":
        {
          "year": "2018/2021",
          "number": 1
        },
      "actual_achievement": 0
    },
    {
      "department": "MINISTRY OF PUBLIC SERVICE, ADMINISTRATION AND DISASTER MANAGEMENT",
      "indicators": "Complete and established disaster operations center (phased)",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": 0,
      "financial_year":
        {
          "year": "2018/2021",
          "number": 0
        },
      "actual_achievement": 0
    },
    {
      "department": "MINISTRY OF PUBLIC SERVICE, ADMINISTRATION AND DISASTER MANAGEMENT",
      "indicators": "Number of field offices operationalized",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": 37,
      "financial_year":
        {
          "year": "2018/2021",
          "number": 37
        },
      "actual_achievement": 37
    },
    {
      "department": "MINISTRY OF PUBLIC SERVICE, ADMINISTRATION AND DISASTER MANAGEMENT",
      "indicators": "Established and operationalized training center (phased)",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": 0,
      "financial_year":
        {
          "year": "2018/2021",
          "number": 0
        },
      "actual_achievement": 0
    },
    {
      "department": "MINISTRY OF TOURISM, CULTURE AND NATURAL RESOURCE MANAGEMENT",
      "indicators": "Number of support infrastructure (curio shop & entry points)",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": 0,
      "financial_year":
        {
          "year": "2018/2021",
          "number": 5
        },
      "actual_achievement": 1
    },
    {
      "department": "MINISTRY OF TOURISM, CULTURE AND NATURAL RESOURCE MANAGEMENT",
      "indicators": "Tourism Bill & Policy in place",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": 0,
      "financial_year":
        {
          "year": "2018/2021",
          "number": 1
        },
      "actual_achievement": 0
    },
    {
      "department": "MINISTRY OF TOURISM, CULTURE AND NATURAL RESOURCE MANAGEMENT",
      "indicators": "No. of tourism marketing events held",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": 3,
      "financial_year":
        {
          "year": "2018/2021",
          "number": 3
        },
      "actual_achievement": 5
    },
    {
      "department": "MINISTRY OF TOURISM, CULTURE AND NATURAL RESOURCE MANAGEMENT",
      "indicators": "Number of Cultural centers rehabilitated",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": 2,
      "financial_year":
        {
          "year": "2018/2021",
          "number": 0
        },
      "actual_achievement": 1
    },
    {
      "department": "MINISTRY OF TOURISM, CULTURE AND NATURAL RESOURCE MANAGEMENT",
      "indicators": "Hectares of land set aside for forest development",
      "unit": "Ha",
      "baseline_year": 2017,
      "baseline_value": 20,
      "financial_year":
        {
          "year": "2018/2021",
          "number": 20
        },
      "actual_achievement": 40
    },
    {
      "department": "MINISTRY OF TOURISM, CULTURE AND NATURAL RESOURCE MANAGEMENT",
      "indicators": "No. of National Reserves developed and managed",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": 1,
      "financial_year":
        {
          "year": "2018/2021",
          "number": 1
        },
      "actual_achievement": 0
    },
    {
      "department": "MINISTRY OF TRADE, GENDER AND YOUTH AFFAIRS",
      "indicators": "No of MSMEs accessing business development & training services at Biashara Center",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": 300,
      "financial_year":
        {
          "year": "2018/2021",
          "number": 400
        },
      "actual_achievement": 400
    },
    {
      "department": "MINISTRY OF TRADE, GENDER AND YOUTH AFFAIRS",
      "indicators": "No. of Standards Calibrated and Number of Weighing and measuring Equipment Tested and Stamped.",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": 700,
      "financial_year":
        {
          "year": "2018/2021",
          "number": 1500
        },
      "actual_achievement": 1800
    },
    {
      "department": "MINISTRY OF TRADE, GENDER AND YOUTH AFFAIRS",
      "indicators": "No of trade promotional events conducted through trade fairs, expos and investments",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": 1,
      "financial_year":
        {
          "year": "2018/2021",
          "number": 2
        },
      "actual_achievement": ""
    },
    {
      "department": "MINISTRY OF TRADE, GENDER AND YOUTH AFFAIRS",
      "indicators": "No of cooperative societies accessing Credit",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": 34,
      "financial_year":
        {
          "year": "2018/2021",
          "number": 44
        },
      "actual_achievement": 0
    },
    {
      "department": "MINISTRY OF TRADE, GENDER AND YOUTH AFFAIRS",
      "indicators": "No of women empowered",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": 600,
      "financial_year":
        {
          "year": "2018/2021",
          "number": 500
        },
      "actual_achievement": 600
    },
    {
      "department": "MINISTRY OF TRADE, GENDER AND YOUTH AFFAIRS",
      "indicators": "No of youths participating in socio-economic development",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": 70,
      "financial_year":
        {
          "year": "2018/2021",
          "number": 140
        },
      "actual_achievement": ""
    },
    {
      "department": "MINISTRY OF WATER, ENVIROMENT AND MINERAL RESOURCE MANAGEMENT",
      "indicators": "Number of operational Municipality and urban water supply systems",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": 4,
      "financial_year":
        {
          "year": "2018/2021",
          "number": 0
        },
      "actual_achievement": 0
    },
    {
      "department": "MINISTRY OF WATER, ENVIROMENT AND MINERAL RESOURCE MANAGEMENT",
      "indicators": "Number of operational rural water supply systems",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": 15,
      "financial_year":
        {
          "year": "2018/2021",
          "number": 5
        },
      "actual_achievement": 3
    },
    {
      "department": "MINISTRY OF WATER, ENVIROMENT AND MINERAL RESOURCE MANAGEMENT",
      "indicators": "Number of successful boreholes drilled and equipped",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": 1267,
      "financial_year":
        {
          "year": "2018/2021",
          "number": 30
        },
      "actual_achievement": 11
    },
    {
      "department": "MINISTRY OF WATER, ENVIROMENT AND MINERAL RESOURCE MANAGEMENT",
      "indicators": "No. of surface water harvesting and storage structures",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": 131,
      "financial_year":
        {
          "year": "2018/2021",
          "number": "-"
        },
      "actual_achievement": 15
    },
    {
      "department": "MINISTRY OF WATER, ENVIROMENT AND MINERAL RESOURCE MANAGEMENT",
      "indicators": "Number of water Resource Users Associations operational",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": 10,
      "financial_year":
        {
          "year": "2018/2021",
          "number": 4
        },
      "actual_achievement": 4
    },
    {
      "department": "MINISTRY OF WATER, ENVIROMENT AND MINERAL RESOURCE MANAGEMENT",
      "indicators": "Operational water policy and bill",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": "DRAFT",
      "financial_year":
        {
          "year": "2018/2021",
          "number": 2
        },
      "actual_achievement": 2
    },
    {
      "department": "MINISTRY OF WATER, ENVIROMENT AND MINERAL RESOURCE MANAGEMENT",
      "indicators": "An operational strategic plan.",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": 0,
      "financial_year":
        {
          "year": "2018/2021",
          "number": ""
        },
      "actual_achievement": ""
    },
    {
      "department": "MINISTRY OF WATER, ENVIROMENT AND MINERAL RESOURCE MANAGEMENT",
      "indicators": "Number of water users’ associations operational",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": 61,
      "financial_year":
        {
          "year": "2018/2021",
          "number": 10
        },
      "actual_achievement": 10
    },
    {
      "department": "MINISTRY OF WATER, ENVIROMENT AND MINERAL RESOURCE MANAGEMENT",
      "indicators": "Number of Private Public Partnerships developed and operationalized",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": "N/A",
      "financial_year":
        {
          "year": "2018/2021",
          "number": ""
        },
      "actual_achievement": ""
    },
    {
      "department": "MINISTRY OF WATER, ENVIROMENT AND MINERAL RESOURCE MANAGEMENT",
      "indicators": "No. of Environmental Impact Assessment (EIA), SEA, SIA and Environmental Audit (EA) reviewed",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": 200,
      "financial_year":
        {
          "year": "2018/2021",
          "number": 100
        },
      "actual_achievement": 108
    },
    {
      "department": "MINISTRY OF WATER, ENVIROMENT AND MINERAL RESOURCE MANAGEMENT",
      "indicators": "No. of site inspections to ensure environmental compliance",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": 10,
      "financial_year":
        {
          "year": "2018/2021",
          "number": 8
        },
      "actual_achievement": ""
    },
    {
      "department": "MINISTRY OF WATER, ENVIROMENT AND MINERAL RESOURCE MANAGEMENT",
      "indicators": "No. of noise permits issued to control air and noise pollution",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": 10,
      "financial_year":
        {
          "year": "2018/2021",
          "number": 20
        },
      "actual_achievement": 45
    },
    {
      "department": "MINISTRY OF WATER, ENVIROMENT AND MINERAL RESOURCE MANAGEMENT",
      "indicators": "No. of Policies and instruments related to Climate Change and Adaptation",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": 0,
      "financial_year":
        {
          "year": "2018/2021",
          "number": 1
        },
      "actual_achievement": 0
    },
    {
      "department": "MINISTRY OF WATER, ENVIROMENT AND MINERAL RESOURCE MANAGEMENT",
      "indicators": "No. of people sensitized and educated on climate change mitigation and adaptation",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": 0,
      "financial_year":
        {
          "year": "2018/2021",
          "number": 1000
        },
      "actual_achievement": 500
    },
    {
      "department": "MINISTRY OF WATER, ENVIROMENT AND MINERAL RESOURCE MANAGEMENT",
      "indicators": "No of Artisanal and small-scale miners trained",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": 1,
      "financial_year":
        {
          "year": "2018/2021",
          "number": 100
        },
      "actual_achievement": ""
    },
    {
      "department": "MINISTRY OF WATER, ENVIROMENT AND MINERAL RESOURCE MANAGEMENT",
      "indicators": "Minerals Mapping and feasibility report",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": 0,
      "financial_year":
        {
          "year": "2018/2021",
          "number": 0
        },
      "actual_achievement": 0
    },
    {
      "department": "MINISTRY OF WATER, ENVIROMENT AND MINERAL RESOURCE MANAGEMENT",
      "indicators": "No. of   quarrying bills and policies developed",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": 0,
      "financial_year":
        {
          "year": "2018/2021",
          "number": ""
        },
      "actual_achievement": 0
    },
    {
      "department": "MINISTRY OF WATER, ENVIROMENT AND MINERAL RESOURCE MANAGEMENT",
      "indicators": "Number of public fora held to discuss emerging issues and current issues in the petroleum exploration going on in the county",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": 0,
      "financial_year":
        {
          "year": "2018/2021",
          "number": 2
        },
      "actual_achievement": 2
    },
    {
      "department": "MINISTRY OF WATER, ENVIROMENT AND MINERAL RESOURCE MANAGEMENT",
      "indicators": "Number of staff trained in the oil and gas matters",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": 20,
      "financial_year":
        {
          "year": "2018/2021",
          "number": 25
        },
      "actual_achievement": 2
    },
    {
      "department": "MINISTRY OF WATER, ENVIROMENT AND MINERAL RESOURCE MANAGEMENT",
      "indicators": "No. of County Extractives engagement bill and policy in place developed",
      "unit": "No.",
      "baseline_year": 2017,
      "baseline_value": 0,
      "financial_year":
        {
          "year": "2018/2021",
          "number": 0
        },
      "actual_achievement": 0
    }
  ];

  return knex("kpi").insert(kpiData);
};