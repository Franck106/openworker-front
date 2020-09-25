import { Injectable } from '@angular/core';
import { Proposal } from 'src/app/features/catalogue/services/models/proposal';
import { ElasticProposal } from './elastic-proposal';

@Injectable({
    providedIn: 'root'
  })
export class ElasticMapper {
  convertElasticResponseToProposal(elasticProposal: ElasticProposal): Proposal {
    const proposal: Proposal = {
      id: elasticProposal.id,
      name: elasticProposal.name,
      image: elasticProposal.image,
      description: elasticProposal.description,
      price: elasticProposal.price,
      maxDistance: elasticProposal.max_distance,
      date: new Date(elasticProposal.date),
      category: {
        id: elasticProposal.category_id,
        name: elasticProposal.category_name,
        description: elasticProposal.category_description,
        image: elasticProposal.category_image,
      },
      provider: {
        id: parseInt(elasticProposal.provider_id),
        firstName: elasticProposal.first_name,
        lastName: elasticProposal.last_name,
        address: elasticProposal.address,
        postCode: elasticProposal.post_code,
        city: elasticProposal.city,
        phoneNumber: elasticProposal.phone_number,
        email: elasticProposal.email,
        premium: elasticProposal.premium,
        admin: elasticProposal.admin,
        registrationNumber: elasticProposal.registration_number,
        globalRating: elasticProposal.global_rating,
        image: elasticProposal.user_image,
        role: elasticProposal.role,
        geolocation: elasticProposal.geolocation,
      },
    };

    return proposal;
  }
}
