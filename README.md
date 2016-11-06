#busyapi
A sample API server for use as an optimization subject.

##Setup
*  Clone this repository
*  Make sure a local Redis server is running
*  Install dependencies `npm install`
*  Start the server `npm start`

##API
The API consists of a single endpoint which receives data when a patient uses their inhaler.

###Add Usage
*  **method**: POST
*  **endpoint**: /api/usages
*  **data**: JSON usage object
*  **result**: JSON object containing the usageId, HTTP Status 201, 200, 500

####Example

**Data**
````
{
    "patientId":100,
    "timestamp":"Tue Nov 01 2016 09:11:51 GMT-0500 (CDT)",
    "medication":"Albuterol",
}
````

**Request**

     curl -X POST -H "Content-Type: application/json" --data '{"patientId":"100","timestamp":"Tue Nov 01 2016 09:11:51 GMT-0500 (CDT)","medication":"Albuterol"}' http://localhost:3000/api/usages

**Response**
````
{
    "id":22954
}
````

**Make lots of requests**

     ab -p data.json -T application/json -c 350 -n 100000 http://localhost:3000/api/usages
