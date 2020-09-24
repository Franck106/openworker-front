export interface ElasticProposal {
    "_index": string,
    "_type": string,
    "_id": string,
    "_score": number,
    "_source": {
        "@version": string,
        "provider_id": string,
        "category_id": number,
        "date": string,
        "id": number,
        "max_distance": number,
        "description": string,
        "@timestamp": string,
        "name": string,
        "image": string,
        "price": number
    }
}