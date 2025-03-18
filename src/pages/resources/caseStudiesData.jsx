import fintechImg from '../../assets/case study/1st.jpg';
import equipmentImg from '../../assets/case study/2nd.jpg';
import Ai from '../../assets/case study/3rd.jpg';
import healthImg from '../../assets/case study/4th.jpg'
import retailImg from '../../assets/case study/5th.jpg'
import smartCityImg from '../../assets/case study/6th.jpg'


// Export the case studies data
export const caseStudies = [
  {
    id: 1,
    title: "Universal ID Assignment to Promote Sales for Fintech Client",
    category: "Fintech",
    image: fintechImg,
    summary: "Improve lending for a fintech customer by identifying low risk customers.",
    businessNeed: "Goldmining (Look-A-Like); Leverage internal, external and any new needed data assets to programmatically derive (through an AI model) behavioral patterns across existing customers, tagging the patterns and leveraging the patterns for targeting similar consumers to become net new clients. These behavioral pattern segmentations will also be leveraged for other use cases such as discounting, product bundling, pricing campaigns.",
    solution: [
      "Perform daily data scans across digital behavior patterns of our customers based on a set rule of parameters, append their history of patterns, categorize the customers by similar patterns based on the set rules of parameters matching, place their UID (Universal ID) into the appropriate grouping definition of Goldmining customer type, through the Common Data Model (CDM). Goldmining classification group will be initially predefined based on a set of business and behavior pattern sequences definitions, then improved and updated by ML/AI models.",
      "Top Goldmining groups BUID will be utilized to build targeted customer acquisition types, joined to BUID to buy/acquire/partner/ with external data sources in Cloud based data marketplaces to join new data with existing and launch new target consumer acquisition strategies."
    ],
    technologyStack: "Databricks, Attacama, Snowflake, Power-BI",
    outcome: [
      "Identified healthy set of customers for executing campaigns.",
      "Reduction in campaign cost by $1 Million with improved acceptance rates"
    ]
  },
  {
    id: 2,
    title: "Equipment Failure Prediction",
    category: "Utilities",
    image: equipmentImg,
    summary: "Optimizing maintenance to extend equipment life-span, reduce capital investment, and minimize unplanned downtime for a major utility provider.",
    businessNeed: "Boiler Water Circuit Pumps (BWCPs) have an expected useful life of ~10 years but actual length of service has averaged 6-7 years. An unforeseen failure of BWCPs can cause an entire power generation unit to stop operating and generating electricity. High motor temperature was stated as a primary, suspected culprit of decreased pump life caused most often by mistakes in start-up procedure. Real-time advanced pattern recognition provided by their Maintenance and Diagnostics Center was producing too many false positives indicating failure. Deeper investigation into the causes of failure was needed to better understand if the relationships found could predict future failures.",
    solution: [
      "Created reusable data pipeline able to ingest plant sensor data, generate a prediction, and write results back to a dashboard consumed by plant personnel."
    ],
    technologyStack: "Azure ML, Azure Data Factory, Synapse, Spark, Scala, Power-BI",
    outcome: [
      "Developed an analytics model to predicts odds of pump failure in coming 30 days and 6 months, helping reduce the probability of needing a full replacement",
      "Solution mitigates repair costs which can be $400k per unforeseen BWCP failure (or a full replacement cost of $800k), potentially saving the plant millions of dollars per year."
    ]
  },
  {
    id: 3,
    title: "AI-Driven Supply Chain Optimization",
    category: "Manufacturing",
    image: Ai,
    summary: "Revolutionizing inventory management and distribution for a global manufacturer.",
    businessNeed: "To reduce excess inventory costs while maintaining optimal stock levels across multiple distribution centers.",
    solution: [
      "Implemented predictive analytics model to forecast demand with 95% accuracy",
      "Created dynamic inventory allocation system responsive to real-time market conditions"
    ],
    technologyStack: "TensorFlow, Python, AWS, Tableau",
    outcome: [
      "Reduced inventory holding costs by 22%",
      "Decreased stockouts by 37%",
      "Improved overall supply chain efficiency by 15%"
    ]
  },
  {
    id: 4,
    title: "Healthcare Patient Flow Optimization",
    category: "Healthcare",
    image: healthImg,
    summary: "Streamlining emergency department operations to reduce wait times and improve patient outcomes.",
    businessNeed: "A major hospital network struggled with long emergency department wait times and inefficient resource allocation.",
    solution: [
      "Developed ML models to predict patient surge periods",
      "Created staff scheduling algorithms based on anticipated demand",
      "Implemented real-time bed management system"
    ],
    technologyStack: "Python, SQL, Azure, Power BI",
    outcome: [
      "Reduced average wait times by 40%",
      "Improved patient satisfaction scores by 35%",
      "Optimized staffing resulting in $3.2M annual savings"
    ]
  },
  {
    id: 5,
    title: "Retail Customer Personalization Engine",
    category: "Retail",
    image: retailImg,
    summary: "Creating hyper-personalized shopping experiences through advanced analytics and machine learning.",
    businessNeed: "Major retailer needed to compete with e-commerce giants by improving personalization across channels.",
    solution: [
      "Built comprehensive customer data platform integrating online and offline touchpoints",
      "Developed real-time recommendation engine with contextual awareness",
      "Created personalized marketing automation system"
    ],
    technologyStack: "Google Cloud, BigQuery, TensorFlow, React",
    outcome: [
      "28% increase in average order value",
      "42% improvement in email campaign conversion",
      "17% reduction in customer acquisition costs"
    ]
  },
  {
    id: 6,
    title: "Smart City Traffic Management",
    category: "Public Sector",
    image: smartCityImg,
    summary: "Reducing congestion and improving transportation efficiency through AI-powered traffic systems.",
    businessNeed: "Growing metropolitan area faced increasing traffic congestion impacting quality of life and economic productivity.",
    solution: [
      "Deployed IoT sensor network throughout city infrastructure",
      "Implemented adaptive traffic signal control algorithms",
      "Created predictive congestion management system"
    ],
    technologyStack: "IoT, Python, Kafka, Hadoop, TensorFlow",
    outcome: [
      "Reduced average commute times by 23%",
      "Decreased traffic-related emissions by 18%",
      "Improved emergency vehicle response times by a critical 4.5 minutes"
    ]
  }
];

export const editorsPicks = [
  {
    id: 7,
    title: "AI-powered Creativity",
    category: "Innovation",
    image: Ai,
    content: "Exploring AI's role in creative industries and how it's transforming the way we work.",
  },
  {
    id: 8,
    title: "Metaverse & AI",
    category: "Tech",
    image: smartCityImg,
    content: "How AI is shaping the virtual world and creating new possibilities for interaction.",
  }
];