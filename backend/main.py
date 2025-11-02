from fastapi import FastAPI;

app = FastAPI()

files = [
    {
        "id": 1, 
        "name": "Lease Plan",
        "description": "Invest in solar power with ZERO upfront payment and start saving up to 50% on your existing electricity bill. In this plan, you have to pay for using solar for 5 years. Hypersrot will handle maintenance and insure your plan for the 5-year lease duration at no extra cost. At the end of the term, the plant will be handed over to the society at no extra cost",
    },  
    {
        "id": 2, 
        "name": "Purchase Plan",
        "description": "In this plan, you need to pay the entire solar plant cost upfront. Additionally, PM Surya Ghar Yojna Subsidy, a government subsidy, helps you get a cashback of ₹18,000 per kW for solar plant sizes up to 500 kW. The regular payback period for solar panels is reduced to 1-2 years with the subsidy, down from 3-4 years without it.",
    },   
    {
        "id": 3, 
        "name": "Loan Plan",
        "description": "In our loan plan, embracing solar energy is easy; all you have to do is pay 30% of the upfront cost and take the solar on a loan. Easy, isn’t it? Also, you can take advantage of the accelerated depreciation of solar plants. With a typical payback period of 5-6 years, you can enjoy free electricity for the next 20 years."
    },
     
]

@app.get("/")
def get_documents():
    return files
