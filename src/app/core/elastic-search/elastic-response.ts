export interface ElasticResponse {
    "took" : number,
    "timed_out" : boolean,
    "_shards" : {
        "total" : number,
        "successful" : number,
        "skipped" : number,
        "failed" : number
    },
    "hits" : {
        "total" : {
        "value" : number,
        "relation" : string
        },
        "max_score" : number,
        "hits" : [{
            "_index": string,
            "_type": string,
            "_id": string,
            "_score": number,
            "_source": {
                "@version": string,
                "@timestamp": string,
                "id": number,
                "name": string,
                "max_distance": number,
                "description": string,
                "image": string,
                "price": number,
                "category_id": number,
                "category_description" : string,
                "category_name" : string,
                "category_image" : string,
                "date": string,
                "provider_id": string,
                "first_name": string,
                "user_image" : string,
                "email": string,
                "admin": boolean,
                "city": string,
                "premium": boolean,
                "registration_number": string,
                "address": string,
                "geolocation": string,
                "post_code": string,
                "phone_number": string,
                "global_rating": number,
                "role": string,
                "last_name": string,
                "credentials_id": number
            }
        }]
    }
}