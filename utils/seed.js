const mongoose = require('mongoose');
// const User = require('../models/userModel');
const Furniture = require('../models/petModel');
const dotenv = require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const adminData = [
    {
        name: 'Wesley Waka',
        email: 'wesleywaka77@gmail.com',
        password: 'Wesleywaka2003.',
        admin: true
    }
];

const furnitureData = [
    {
        id: 1,
        name: "6 Inch Bully Sticks - thick",
        length: "6 inch",
        style: "straight",
        thickness: "thick",
        details: "If you’ve got a pooch that loves to chew, check out our healthy and nutritious 6\" odor-free bully sticks. Perfect for pups who love to work out those teeth, our 100% pizzle sticks provide a welcome distraction and save the couch, shoes, and table legs from dog drool and chew marks. Made with all-natural beef from free-range South American cows, these additive and preservative-free sticks are designed for small to medium-sized dogs who enjoy something slightly tougher to chew through. Our 6\" thick, odor-free bully sticks also tackle bad breath and tartar buildup, so your four-legged friend stays healthy and smells fresher.",
        feeding_guidelines: "Please supervise your dog when feeding any chew or treat. Bully sticks can present a chocking hazard if your dog is not used to chewing one. Remove the final inch or so and throw it away in the trash. Make sure your dog has plenty of water during consumption.A Bully stick is a high protein treat, and if your dog is not used to digesting such high amounts, they may end up with an upset stomach, diarrhea, or vomiting.",
        general_feeding_guidelines:[
            "Consult with your veterinarian or a professional nutritionist to determine the appropriate amount of chews to feed your dog based on their size, age, and activity level."
            ,"Always supervise your dog while they are chewing on a treat or chew."
            ,"Choose chews that are appropriate for your dog's size and chewing ability. Avoid giving large dogs small chews, as they can be a choking hazard."
            ,"Monitor your dog's chewing behavior, and take the chew away if they start to break it into small pieces or swallow large pieces."
            ,"Keep an eye on the condition of the chew. If it becomes small enough to swallow whole or begins to break into small pieces, it is time to throw it away."
            ,"Keep in mind that chews should not be a replacement for a balanced diet. They should be given as a treat and not as a primary source of nutrition."
            ,"If you have any concerns about your dog's chew habits or if they have a history of gastrointestinal issues, it is always best to consult with a veterinarian before introducing new chews."
        ],
        nutrition_facts:[
            "Bull Pizzle","2992 Kcal/kg","93.3%","0.82%","3.33%","12.03%"
        ],
        image:{
            fileName: "product1",
            filePath: "https://res.cloudinary.com/drezwvhiy/image/upload/v1708476562/PElite/gqfj7ooo8tzkmv0jluy9.jpg"
        },
        extra_images:[
            {
                fileName: "product1",
                filePath: "https://res.cloudinary.com/dh5j7sg3n/image/upload/v1702434217/product-1_axti05.jpg"        
            },
            {
                fileName: "product1",
                filePath: "https://res.cloudinary.com/dh5j7sg3n/image/upload/v1702434217/product-1_axti05.jpg"        
            },
            {
                fileName: "product1",
                filePath: "https://res.cloudinary.com/dh5j7sg3n/image/upload/v1702434217/product-1_axti05.jpg"        
            }
        ],
        age_consumption:["puppy","adult","senior"],
        size_consumption:["small","medium"]
    },
    {
        id: 2,
        name: "6 Inch Bully Sticks - thin",
        length: "6 inch",
        style: "straight",
        thickness: "thin",
        details: "Check out our 6\" thin odor-free bully sticks and give your dog a healthy, nutritious, and full-flavored treat that will work out their jaw, look after those teeth, and encourage good chewing habits. Made from 100% all-natural beef that’s sourced from the finest free-range cattle in South America, the chews contain no additives or preservatives and are a great alternative to rawhide. Perfect for small to medium-sized dogs who enjoy a relaxed, lighter chew, our 6\" thin, odor-free bully sticks tackle bad breath and tartar buildup. They also help to minimize destructive chewing by offering a tasty alternative to table legs, shoes, and anything else your pup regularly bites down on.",
        feeding_guidelines: "Please supervise your dog when feeding any chew or treat. Bully sticks can present a chocking hazard if your dog is not used to chewing one. Remove the final inch or so and throw it away in the trash. Make sure your dog has plenty of water during consumption.A Bully stick is a high protein treat, and if your dog is not used to digesting such high amounts, they may end up with an upset stomach, diarrhea, or vomiting.",
        general_feeding_guidelines:[
            "Consult with your veterinarian or a professional nutritionist to determine the appropriate amount of chews to feed your dog based on their size, age, and activity level."
            ,"Always supervise your dog while they are chewing on a treat or chew."
            ,"Choose chews that are appropriate for your dog's size and chewing ability. Avoid giving large dogs small chews, as they can be a choking hazard."
            ,"Monitor your dog's chewing behavior, and take the chew away if they start to break it into small pieces or swallow large pieces."
            ,"Keep an eye on the condition of the chew. If it becomes small enough to swallow whole or begins to break into small pieces, it is time to throw it away."
            ,"Keep in mind that chews should not be a replacement for a balanced diet. They should be given as a treat and not as a primary source of nutrition."
            ,"If you have any concerns about your dog's chew habits or if they have a history of gastrointestinal issues, it is always best to consult with a veterinarian before introducing new chews."
        ],
        nutrition_facts:[
            "Bull Pizzle","2992 Kcal/kg","93.3%","0.82%","3.33%","12.03%"
        ],
        image:{
            fileName: "product1",
            filePath: "https://res.cloudinary.com/drezwvhiy/image/upload/v1708476550/PElite/cftynmeq1b0xxmcreyto.jpg"
        },
        extra_images:[
            {
                fileName: "product1",
                filePath: "https://res.cloudinary.com/dh5j7sg3n/image/upload/v1702434217/product-1_axti05.jpg"        
            },
            {
                fileName: "product1",
                filePath: "https://res.cloudinary.com/dh5j7sg3n/image/upload/v1702434217/product-1_axti05.jpg"        
            },
            {
                fileName: "product1",
                filePath: "https://res.cloudinary.com/dh5j7sg3n/image/upload/v1702434217/product-1_axti05.jpg"        
            }
        ],
        age_consumption:["Extra Small", "Small Dogs"],
        size_consumption:["small","medium"]
    },
    {
        id: 3,
        name: "6 Inch Bully Sticks - standard",
        length: "6 inch",
        style: "straight",
        thickness: "standard",
        details: "Give your pup something healthy, delicious, and distracting to sink their teeth into with our 6\" odor-free bully sticks. Made from all-natural beef sourced from free-roaming cattle in South America, our bully sticks are ideal for small to medium-sized dogs who love to get their chew on. While the sticks will keep your pup occupied and ensure they forget just how tasty your couch can be, they also help prevent bad breath, tartar buildup, and bad chewing habits. Great for both puppies and older dogs who prefer something substantial to snack on, our 6\" odor-free bully sticks contain no additives and preservatives, making them a tasty, nutritious treat.",
        feeding_guidelines: "Please supervise your dog when feeding any chew or treat. Bully sticks can present a chocking hazard if your dog is not used to chewing one. Remove the final inch or so and throw it away in the trash. Make sure your dog has plenty of water during consumption.A Bully stick is a high protein treat, and if your dog is not used to digesting such high amounts, they may end up with an upset stomach, diarrhea, or vomiting.",
        general_feeding_guidelines:[
            "Consult with your veterinarian or a professional nutritionist to determine the appropriate amount of chews to feed your dog based on their size, age, and activity level."
            ,"Always supervise your dog while they are chewing on a treat or chew."
            ,"Choose chews that are appropriate for your dog's size and chewing ability. Avoid giving large dogs small chews, as they can be a choking hazard."
            ,"Monitor your dog's chewing behavior, and take the chew away if they start to break it into small pieces or swallow large pieces."
            ,"Keep an eye on the condition of the chew. If it becomes small enough to swallow whole or begins to break into small pieces, it is time to throw it away."
            ,"Keep in mind that chews should not be a replacement for a balanced diet. They should be given as a treat and not as a primary source of nutrition."
            ,"If you have any concerns about your dog's chew habits or if they have a history of gastrointestinal issues, it is always best to consult with a veterinarian before introducing new chews."
        ],
        nutrition_facts:[
            "Bull Pizzle","2992 Kcal/kg","93.3%","0.82%","3.33%","12.03%"
        ],
        image:{
            fileName: "product1",
            filePath: "https://res.cloudinary.com/drezwvhiy/image/upload/v1708476558/PElite/kvqpxg3fruxcwvf3gc0u.jpg"
        },
        extra_images:[
            {
                fileName: "product1",
                filePath: "https://res.cloudinary.com/dh5j7sg3n/image/upload/v1702434217/product-1_axti05.jpg"        
            },
            {
                fileName: "product1",
                filePath: "https://res.cloudinary.com/dh5j7sg3n/image/upload/v1702434217/product-1_axti05.jpg"        
            },
            {
                fileName: "product1",
                filePath: "https://res.cloudinary.com/dh5j7sg3n/image/upload/v1702434217/product-1_axti05.jpg"        
            }
        ],
        age_consumption:["puppy","adult","senior"],
        size_consumption:["small","medium"]
    },
    {
        name: "6 Inch Bully Sticks - jumbo",
        id: 4,
        length: "6 inch",
        style: "straight",
        thickness: "jumbo",
        details: "If you have a canine who simply won’t stop working those… well… canines, try out our 6\" jumbo odor-free bully sticks. Designed for small to medium-sized dogs with a strong to powerful chew, our tasty treats contain no additives and preservatives and give your pup something to sink their teeth into. A great way to stop bad chewing habits and keep your couch, table legs, and shoes drool-free, these bully sticks also combat bad breath and tartar buildup, so your four-legged friend benefits from a healthy dental hit, too. Made with 100% all-natural beef from free-grazing South American cattle, our 6\" jumbo odor-free bully sticks are healthy and nutritious snacks for dogs who love to chew.",
        feeding_guidelines: "Please supervise your dog when feeding any chew or treat. Bully sticks can present a chocking hazard if your dog is not used to chewing one. Remove the final inch or so and throw it away in the trash. Make sure your dog has plenty of water during consumption.A Bully stick is a high protein treat, and if your dog is not used to digesting such high amounts, they may end up with an upset stomach, diarrhea, or vomiting.",
        general_feeding_guidelines:[
            "Consult with your veterinarian or a professional nutritionist to determine the appropriate amount of chews to feed your dog based on their size, age, and activity level."
            ,"Always supervise your dog while they are chewing on a treat or chew."
            ,"Choose chews that are appropriate for your dog's size and chewing ability. Avoid giving large dogs small chews, as they can be a choking hazard."
            ,"Monitor your dog's chewing behavior, and take the chew away if they start to break it into small pieces or swallow large pieces."
            ,"Keep an eye on the condition of the chew. If it becomes small enough to swallow whole or begins to break into small pieces, it is time to throw it away."
            ,"Keep in mind that chews should not be a replacement for a balanced diet. They should be given as a treat and not as a primary source of nutrition."
            ,"If you have any concerns about your dog's chew habits or if they have a history of gastrointestinal issues, it is always best to consult with a veterinarian before introducing new chews."
        ],
        nutrition_facts:[
            "Bull Pizzle","2992 Kcal/kg","93.3%","0.82%","3.33%","12.03%"
        ],
        image:{
            fileName: "product1",
            filePath: "https://res.cloudinary.com/drezwvhiy/image/upload/v1708476550/PElite/cftynmeq1b0xxmcreyto.jpg"
        },
        extra_images:[
            {
                fileName: "product1",
                filePath: "https://res.cloudinary.com/dh5j7sg3n/image/upload/v1702434217/product-1_axti05.jpg"        
            },
            {
                fileName: "product1",
                filePath: "https://res.cloudinary.com/dh5j7sg3n/image/upload/v1702434217/product-1_axti05.jpg"        
            },
            {
                fileName: "product1",
                filePath: "https://res.cloudinary.com/dh5j7sg3n/image/upload/v1702434217/product-1_axti05.jpg"        
            }
        ],
        age_consumption:["puppy","adult","senior"],
        size_consumption:["small","medium"]
    },
    {
        id: 5,
        name: "8 Inch Bully Sticks - thin",
        length: "8 inch",
        style: "straight",
        thickness: "thin",
        details: "Introducing our natural 8-inch straight thin bully sticks, specially crafted for dogs who prefer a lighter chewing experience. Made from high-quality beef pizzle, these slender bully sticks offer a satisfying chew without overwhelming smaller mouths. Perfect for puppies, small breeds, or dogs who prefer a softer texture, our thin bully sticks are a wholesome treat that promotes dental health and keeps your canine companion happily occupied.",
        feeding_guidelines: "Please supervise your dog when feeding any chew or treat. Bully sticks can present a chocking hazard if your dog is not used to chewing one. Remove the final inch or so and throw it away in the trash. Make sure your dog has plenty of water during consumption.A Bully stick is a high protein treat, and if your dog is not used to digesting such high amounts, they may end up with an upset stomach, diarrhea, or vomiting.",
        general_feeding_guidelines:[
            "Consult with your veterinarian or a professional nutritionist to determine the appropriate amount of chews to feed your dog based on their size, age, and activity level."
            ,"Always supervise your dog while they are chewing on a treat or chew."
            ,"Choose chews that are appropriate for your dog's size and chewing ability. Avoid giving large dogs small chews, as they can be a choking hazard."
            ,"Monitor your dog's chewing behavior, and take the chew away if they start to break it into small pieces or swallow large pieces."
            ,"Keep an eye on the condition of the chew. If it becomes small enough to swallow whole or begins to break into small pieces, it is time to throw it away."
            ,"Keep in mind that chews should not be a replacement for a balanced diet. They should be given as a treat and not as a primary source of nutrition."
            ,"If you have any concerns about your dog's chew habits or if they have a history of gastrointestinal issues, it is always best to consult with a veterinarian before introducing new chews."
        ],
        nutrition_facts:[
            "Bull Pizzle","2992 Kcal/kg","93.3%","0.82%","3.33%","12.03%"
        ],
        image:{
            fileName: "product1",
            filePath: "https://res.cloudinary.com/drezwvhiy/image/upload/v1708476544/PElite/aqmtbynahljjijzhrtwt.jpg"
        },
        extra_images:[
            {
                fileName: "product1",
                filePath: "https://res.cloudinary.com/dh5j7sg3n/image/upload/v1702434217/product-1_axti05.jpg"        
            },
            {
                fileName: "product1",
                filePath: "https://res.cloudinary.com/dh5j7sg3n/image/upload/v1702434217/product-1_axti05.jpg"        
            },
            {
                fileName: "product1",
                filePath: "https://res.cloudinary.com/dh5j7sg3n/image/upload/v1702434217/product-1_axti05.jpg"        
            }
        ],
        age_consumption:["puppy","adult","senior"],
        size_consumption:["small","medium"]
    },
    {
        id: 6,
        name: "8 Inch Bully Sticks - standard",
        length: "8 inch",
        style: "straight",
        thickness: "standard",
        details: "Introducing our all-natural 8-inch straight standard bully sticks, the perfect chew for dogs who crave a satisfying and long-lasting treat. Crafted from high-quality beef pizzle, these standard bully sticks provide a wholesome chewing experience that promotes dental health and mental stimulation. Each stick is meticulously sourced and prepared to ensure premium quality and flavor, making it an ideal choice for dogs of all breeds and sizes.",
        feeding_guidelines: "Please supervise your dog when feeding any chew or treat. Bully sticks can present a chocking hazard if your dog is not used to chewing one. Remove the final inch or so and throw it away in the trash. Make sure your dog has plenty of water during consumption.A Bully stick is a high protein treat, and if your dog is not used to digesting such high amounts, they may end up with an upset stomach, diarrhea, or vomiting.",
        general_feeding_guidelines:[
            "Consult with your veterinarian or a professional nutritionist to determine the appropriate amount of chews to feed your dog based on their size, age, and activity level."
            ,"Always supervise your dog while they are chewing on a treat or chew."
            ,"Choose chews that are appropriate for your dog's size and chewing ability. Avoid giving large dogs small chews, as they can be a choking hazard."
            ,"Monitor your dog's chewing behavior, and take the chew away if they start to break it into small pieces or swallow large pieces."
            ,"Keep an eye on the condition of the chew. If it becomes small enough to swallow whole or begins to break into small pieces, it is time to throw it away."
            ,"Keep in mind that chews should not be a replacement for a balanced diet. They should be given as a treat and not as a primary source of nutrition."
            ,"If you have any concerns about your dog's chew habits or if they have a history of gastrointestinal issues, it is always best to consult with a veterinarian before introducing new chews."
        ],
        nutrition_facts:[
            "Bull Pizzle","2992 Kcal/kg","93.3%","0.82%","3.33%","12.03%"
        ],
        image:{
            fileName: "product1",
            filePath: "https://res.cloudinary.com/drezwvhiy/image/upload/v1708476562/PElite/yc8u1wnvn5et4chgrktz.jpg"
        },
        extra_images:[
            {
                fileName: "product1",
                filePath: "https://res.cloudinary.com/dh5j7sg3n/image/upload/v1702434217/product-1_axti05.jpg"        
            },
            {
                fileName: "product1",
                filePath: "https://res.cloudinary.com/dh5j7sg3n/image/upload/v1702434217/product-1_axti05.jpg"        
            },
            {
                fileName: "product1",
                filePath: "https://res.cloudinary.com/dh5j7sg3n/image/upload/v1702434217/product-1_axti05.jpg"        
            }
        ],
        age_consumption:["puppy","adult","senior"],
        size_consumption:["small","medium"]
    },
    {
        id: 7,
        name: "8 Inch Bully Sticks - jumbo",
        length: "8 inch",
        style: "straight",
        thickness: "jumbo",
        details: "Indulge your pup in a premium chewing experience with our Jumbo 8-Inch Straight Bully Stick. Crafted from the finest quality beef pizzle, these jumbo bully sticks offer an irresistible texture and robust flavor that dogs love. Satisfyingly thick and durable, they're perfect for larger breeds and aggressive chewers, providing hours of entertainment and promoting dental health. Treat your canine companion to the ultimate chew with our jumbo bully sticks.",
        feeding_guidelines: "Please supervise your dog when feeding any chew or treat. Bully sticks can present a chocking hazard if your dog is not used to chewing one. Remove the final inch or so and throw it away in the trash. Make sure your dog has plenty of water during consumption.A Bully stick is a high protein treat, and if your dog is not used to digesting such high amounts, they may end up with an upset stomach, diarrhea, or vomiting.",
        general_feeding_guidelines:[
            "Consult with your veterinarian or a professional nutritionist to determine the appropriate amount of chews to feed your dog based on their size, age, and activity level."
            ,"Always supervise your dog while they are chewing on a treat or chew."
            ,"Choose chews that are appropriate for your dog's size and chewing ability. Avoid giving large dogs small chews, as they can be a choking hazard."
            ,"Monitor your dog's chewing behavior, and take the chew away if they start to break it into small pieces or swallow large pieces."
            ,"Keep an eye on the condition of the chew. If it becomes small enough to swallow whole or begins to break into small pieces, it is time to throw it away."
            ,"Keep in mind that chews should not be a replacement for a balanced diet. They should be given as a treat and not as a primary source of nutrition."
            ,"If you have any concerns about your dog's chew habits or if they have a history of gastrointestinal issues, it is always best to consult with a veterinarian before introducing new chews."
        ],
        nutrition_facts:[
            "Bull Pizzle","2992 Kcal/kg","93.3%","0.82%","3.33%","12.03%"
        ],
        image:{
            fileName: "product1",
            filePath: "https://res.cloudinary.com/drezwvhiy/image/upload/v1708476619/PElite/w6rg0mdurhzn3h2vrwk7.jpg"
        },
        extra_images:[
            {
                fileName: "product1",
                filePath: "https://res.cloudinary.com/dh5j7sg3n/image/upload/v1702434217/product-1_axti05.jpg"        
            },
            {
                fileName: "product1",
                filePath: "https://res.cloudinary.com/dh5j7sg3n/image/upload/v1702434217/product-1_axti05.jpg"        
            },
            {
                fileName: "product1",
                filePath: "https://res.cloudinary.com/dh5j7sg3n/image/upload/v1702434217/product-1_axti05.jpg"        
            }
        ],
        age_consumption:["puppy","adult","senior"],
        size_consumption:["small","medium"]
    },
    {
        id: 8,
        name: "12 Inch Bully Sticks - thin",
        length: "12 inch",
        style: "straight",
        thickness: "thin",
        details: "Keep your dog off your shoes by distracting them with these tasty, all-natural bully sticks! Made from 100% beef pizzle from free-range Brazilian cattle, these odor-free bully sticks feature 12 inches of delicious delight for your pet to last through many chewing sessions. Since these bully sticks are made from 100% beef with an all-natural drying process, they're safe to digest and snack on.The tough hide melts away as your dog continues gnawing on the stick and reveals a soft and chewy texture that makes these beef sticks fun to snack on. Not only do these chew sticks make the chewing solution for your dog, but they also help keep your furry friend's teeth clean and reduces plaque and tartar buildup. Add these effective bully sticks to your dog owner's toolbox! Great for large dogs to chew on (Small dogs: Consider our 6 inch thin bully sticks)",
        feeding_guidelines: "Please supervise your dog when feeding any chew or treat. Bully sticks can present a chocking hazard if your dog is not used to chewing one. Remove the final inch or so and throw it away in the trash. Make sure your dog has plenty of water during consumption.A Bully stick is a high protein treat, and if your dog is not used to digesting such high amounts, they may end up with an upset stomach, diarrhea, or vomiting.",
        general_feeding_guidelines:[
            "Consult with your veterinarian or a professional nutritionist to determine the appropriate amount of chews to feed your dog based on their size, age, and activity level."
            ,"Always supervise your dog while they are chewing on a treat or chew."
            ,"Choose chews that are appropriate for your dog's size and chewing ability. Avoid giving large dogs small chews, as they can be a choking hazard."
            ,"Monitor your dog's chewing behavior, and take the chew away if they start to break it into small pieces or swallow large pieces."
            ,"Keep an eye on the condition of the chew. If it becomes small enough to swallow whole or begins to break into small pieces, it is time to throw it away."
            ,"Keep in mind that chews should not be a replacement for a balanced diet. They should be given as a treat and not as a primary source of nutrition."
            ,"If you have any concerns about your dog's chew habits or if they have a history of gastrointestinal issues, it is always best to consult with a veterinarian before introducing new chews."
        ],
        nutrition_facts:[
            "Bull Pizzle","2992 Kcal/kg","93.3%","0.82%","3.33%","12.03%"
        ],
        image:{
            fileName: "product1",
            filePath: "https://res.cloudinary.com/drezwvhiy/image/upload/v1708476567/PElite/l4aux6klx6enhuioic7m.jpg"
        },
        extra_images:[
            {
                fileName: "product1",
                filePath: "https://res.cloudinary.com/dh5j7sg3n/image/upload/v1702434217/product-1_axti05.jpg"        
            },
            {
                fileName: "product1",
                filePath: "https://res.cloudinary.com/dh5j7sg3n/image/upload/v1702434217/product-1_axti05.jpg"        
            },
            {
                fileName: "product1",
                filePath: "https://res.cloudinary.com/dh5j7sg3n/image/upload/v1702434217/product-1_axti05.jpg"        
            }
        ],
        age_consumption:["puppy","adult","senior"],
        size_consumption:["small","medium"]
    },
    {
        id: 9,
        name: "12 Inch Bully Sticks - standard",
        length: "12 inch",
        style: "straight",
        thickness: "standard",
        details: "If you share your home with a big dog who never seems to stop chewing, why not try our 12\" odor-free bully sticks and let them enjoy a healthy and nutritious treat made from 100%, all-natural beef? Sourced from free-range South American cows, our pure beef pizzle sticks contain no additives or preservatives and make for a perfect alternative to rawhide. A true taste sensation, the chews help keep your home free of teeth marks and dog drool by encouraging good chewing habits and letting your pup work out all that energy on a full-flavored snack. Our 12\" odor-free bully sticks are designed for medium to extra-large dogs and also make for an ideal treat for larger puppies",
        feeding_guidelines: "Please supervise your dog when feeding any chew or treat. Bully sticks can present a chocking hazard if your dog is not used to chewing one. Remove the final inch or so and throw it away in the trash. Make sure your dog has plenty of water during consumption.A Bully stick is a high protein treat, and if your dog is not used to digesting such high amounts, they may end up with an upset stomach, diarrhea, or vomiting.",
        general_feeding_guidelines:[
            "Consult with your veterinarian or a professional nutritionist to determine the appropriate amount of chews to feed your dog based on their size, age, and activity level."
            ,"Always supervise your dog while they are chewing on a treat or chew."
            ,"Choose chews that are appropriate for your dog's size and chewing ability. Avoid giving large dogs small chews, as they can be a choking hazard."
            ,"Monitor your dog's chewing behavior, and take the chew away if they start to break it into small pieces or swallow large pieces."
            ,"Keep an eye on the condition of the chew. If it becomes small enough to swallow whole or begins to break into small pieces, it is time to throw it away."
            ,"Keep in mind that chews should not be a replacement for a balanced diet. They should be given as a treat and not as a primary source of nutrition."
            ,"If you have any concerns about your dog's chew habits or if they have a history of gastrointestinal issues, it is always best to consult with a veterinarian before introducing new chews."
        ],
        nutrition_facts:[
            "Bull Pizzle","2992 Kcal/kg","93.3%","0.82%","3.33%","12.03%"
        ],
        image:{
            fileName: "product1",
            filePath: "https://res.cloudinary.com/drezwvhiy/image/upload/v1708476571/PElite/brw0v8bjtetjywzn3iis.jpg"
        },
        extra_images:[
            {
                fileName: "product1",
                filePath: "https://res.cloudinary.com/dh5j7sg3n/image/upload/v1702434217/product-1_axti05.jpg"        
            },
            {
                fileName: "product1",
                filePath: "https://res.cloudinary.com/dh5j7sg3n/image/upload/v1702434217/product-1_axti05.jpg"        
            },
            {
                fileName: "product1",
                filePath: "https://res.cloudinary.com/dh5j7sg3n/image/upload/v1702434217/product-1_axti05.jpg"        
            }
        ],
        age_consumption:["puppy","adult","senior"],
        size_consumption:["small","medium"]
    },
    {
        id: 10,
        name: "12 Inch Bully Sticks - jumbo",
        length: "12 inch",
        style: "straight",
        thickness: "jumbo",
        details: "When your pup gets that insatiable urge to chew, protect your home from drool and teeth marks by letting them sink their teeth into our 12\" jumbo odor-free bully sticks. Made from 100% all-natural beef from South America, these jumbo treats are designed for medium to extra-large dogs who have a strong, powerful chew and enjoy really getting to grips with their bully sticks. Additive and preservative-free, the chews help keep your dog’s teeth in perfect condition by preventing tartar buildup, while also tackling bad breath. So tasty you may be tempted to give them a try yourself, our 12\" jumbo odor-free bully sticks are the perfect way to wean your dog off destructive chewing habits or reward them with a well-earned treat.",
        feeding_guidelines: "Please supervise your dog when feeding any chew or treat. Bully sticks can present a chocking hazard if your dog is not used to chewing one. Remove the final inch or so and throw it away in the trash. Make sure your dog has plenty of water during consumption.A Bully stick is a high protein treat, and if your dog is not used to digesting such high amounts, they may end up with an upset stomach, diarrhea, or vomiting.",
        general_feeding_guidelines:[
            "Consult with your veterinarian or a professional nutritionist to determine the appropriate amount of chews to feed your dog based on their size, age, and activity level."
            ,"Always supervise your dog while they are chewing on a treat or chew."
            ,"Choose chews that are appropriate for your dog's size and chewing ability. Avoid giving large dogs small chews, as they can be a choking hazard."
            ,"Monitor your dog's chewing behavior, and take the chew away if they start to break it into small pieces or swallow large pieces."
            ,"Keep an eye on the condition of the chew. If it becomes small enough to swallow whole or begins to break into small pieces, it is time to throw it away."
            ,"Keep in mind that chews should not be a replacement for a balanced diet. They should be given as a treat and not as a primary source of nutrition."
            ,"If you have any concerns about your dog's chew habits or if they have a history of gastrointestinal issues, it is always best to consult with a veterinarian before introducing new chews."
        ],
        nutrition_facts:[
            "Bull Pizzle","2992 Kcal/kg","93.3%","0.82%","3.33%","12.03%"
        ],
        image:{
            fileName: "product1",
            filePath: "https://res.cloudinary.com/drezwvhiy/image/upload/v1708476550/PElite/r1wfgs3qohw0pjhejjsr.jpg"
        },
        extra_images:[
            {
                fileName: "product1",
                filePath: "https://res.cloudinary.com/dh5j7sg3n/image/upload/v1702434217/product-1_axti05.jpg"        
            },
            {
                fileName: "product1",
                filePath: "https://res.cloudinary.com/dh5j7sg3n/image/upload/v1702434217/product-1_axti05.jpg"        
            },
            {
                fileName: "product1",
                filePath: "https://res.cloudinary.com/dh5j7sg3n/image/upload/v1702434217/product-1_axti05.jpg"        
            }
        ],
        age_consumption:["puppy","adult","senior"],
        size_consumption:["small","medium"]
    },
    {
        id: 11,
        name: "Bully Bites",
        length: "Bully Bites",
        style: "straight",
        details: "Introducing our delectable Bully Bites, the perfect snack for your beloved pup! Made from premium beef pizzle, these bite-sized treats pack a punch of flavor and nutrition in every bite. Whether used as a reward during training sessions or simply as a tasty snack between meals, our Bully Bites are sure to keep your dog's tail wagging with joy. With their natural texture and rich protein content, they're not only delicious but also beneficial for your dog's dental health and overall well-being. Treat your furry friend to the goodness of Bully Bites today!",
        feeding_guidelines: "Please supervise your dog when feeding any chew or treat. Bully sticks can present a chocking hazard if your dog is not used to chewing one. Remove the final inch or so and throw it away in the trash. Make sure your dog has plenty of water during consumption.A Bully stick is a high protein treat, and if your dog is not used to digesting such high amounts, they may end up with an upset stomach, diarrhea, or vomiting.",
        general_feeding_guidelines:[
            "Consult with your veterinarian or a professional nutritionist to determine the appropriate amount of chews to feed your dog based on their size, age, and activity level."
            ,"Always supervise your dog while they are chewing on a treat or chew."
            ,"Choose chews that are appropriate for your dog's size and chewing ability. Avoid giving large dogs small chews, as they can be a choking hazard."
            ,"Monitor your dog's chewing behavior, and take the chew away if they start to break it into small pieces or swallow large pieces."
            ,"Keep an eye on the condition of the chew. If it becomes small enough to swallow whole or begins to break into small pieces, it is time to throw it away."
            ,"Keep in mind that chews should not be a replacement for a balanced diet. They should be given as a treat and not as a primary source of nutrition."
            ,"If you have any concerns about your dog's chew habits or if they have a history of gastrointestinal issues, it is always best to consult with a veterinarian before introducing new chews."
        ],
        nutrition_facts:[
            "Bull Pizzle","2992 Kcal/kg","93.3%","0.82%","3.33%","12.03%"
        ],
        image:{
            fileName: "product1",
            filePath: "https://res.cloudinary.com/drezwvhiy/image/upload/v1708476546/PElite/avifbky4h5nhhevgnyrc.jpg"
        },
        extra_images:[
            {
                fileName: "product1",
                filePath: "https://res.cloudinary.com/dh5j7sg3n/image/upload/v1702434217/product-1_axti05.jpg"        
            },
            {
                fileName: "product1",
                filePath: "https://res.cloudinary.com/dh5j7sg3n/image/upload/v1702434217/product-1_axti05.jpg"        
            },
            {
                fileName: "product1",
                filePath: "https://res.cloudinary.com/dh5j7sg3n/image/upload/v1702434217/product-1_axti05.jpg"        
            }
        ],
        age_consumption:["puppy","adult","senior"],
        size_consumption:["small","medium"]
    },
    {
        name: "6 Inch Bully Sticks - braided",
        id: 12,
        length: "6 inch",
        style: "braided",
        thickness: "standard",
        details: "If you have a canine who simply won’t stop working those… well… canines, try out our 6\" jumbo odor-free bully sticks. Designed for small to medium-sized dogs with a strong to powerful chew, our tasty treats contain no additives and preservatives and give your pup something to sink their teeth into. A great way to stop bad chewing habits and keep your couch, table legs, and shoes drool-free, these bully sticks also combat bad breath and tartar buildup, so your four-legged friend benefits from a healthy dental hit, too. Made with 100% all-natural beef from free-grazing South American cattle, our 6\" jumbo odor-free bully sticks are healthy and nutritious snacks for dogs who love to chew.",
        feeding_guidelines: "Please supervise your dog when feeding any chew or treat. Bully sticks can present a chocking hazard if your dog is not used to chewing one. Remove the final inch or so and throw it away in the trash. Make sure your dog has plenty of water during consumption.A Bully stick is a high protein treat, and if your dog is not used to digesting such high amounts, they may end up with an upset stomach, diarrhea, or vomiting.",
        general_feeding_guidelines:[
            "Consult with your veterinarian or a professional nutritionist to determine the appropriate amount of chews to feed your dog based on their size, age, and activity level."
            ,"Always supervise your dog while they are chewing on a treat or chew."
            ,"Choose chews that are appropriate for your dog's size and chewing ability. Avoid giving large dogs small chews, as they can be a choking hazard."
            ,"Monitor your dog's chewing behavior, and take the chew away if they start to break it into small pieces or swallow large pieces."
            ,"Keep an eye on the condition of the chew. If it becomes small enough to swallow whole or begins to break into small pieces, it is time to throw it away."
            ,"Keep in mind that chews should not be a replacement for a balanced diet. They should be given as a treat and not as a primary source of nutrition."
            ,"If you have any concerns about your dog's chew habits or if they have a history of gastrointestinal issues, it is always best to consult with a veterinarian before introducing new chews."
        ],
        nutrition_facts:[
            "Bull Pizzle","2992 Kcal/kg","93.3%","0.82%","3.33%","12.03%"
        ],
        image:{
            fileName: "product1",
            filePath: "https://res.cloudinary.com/drezwvhiy/image/upload/v1708476614/PElite/ziyc1gundtidhugtlk28.png"
        },
        extra_images:[
            {
                fileName: "product1",
                filePath: "https://res.cloudinary.com/dh5j7sg3n/image/upload/v1702434217/product-1_axti05.jpg"        
            },
            {
                fileName: "product1",
                filePath: "https://res.cloudinary.com/dh5j7sg3n/image/upload/v1702434217/product-1_axti05.jpg"        
            },
            {
                fileName: "product1",
                filePath: "https://res.cloudinary.com/dh5j7sg3n/image/upload/v1702434217/product-1_axti05.jpg"        
            }
        ],
        age_consumption:["puppy","adult","senior"],
        size_consumption:["small","medium"]
    },
    {
        name: "4 & 5 Inch Bully Sticks - straight",
        id: 13,
        length: "5 inch",
        style: "braided",
        thickness: "standard",
        details: "If you have a canine who simply won’t stop working those… well… canines, try out our 6\" jumbo odor-free bully sticks. Designed for small to medium-sized dogs with a strong to powerful chew, our tasty treats contain no additives and preservatives and give your pup something to sink their teeth into. A great way to stop bad chewing habits and keep your couch, table legs, and shoes drool-free, these bully sticks also combat bad breath and tartar buildup, so your four-legged friend benefits from a healthy dental hit, too. Made with 100% all-natural beef from free-grazing South American cattle, our 6\" jumbo odor-free bully sticks are healthy and nutritious snacks for dogs who love to chew.",
        feeding_guidelines: "Please supervise your dog when feeding any chew or treat. Bully sticks can present a chocking hazard if your dog is not used to chewing one. Remove the final inch or so and throw it away in the trash. Make sure your dog has plenty of water during consumption.A Bully stick is a high protein treat, and if your dog is not used to digesting such high amounts, they may end up with an upset stomach, diarrhea, or vomiting.",
        general_feeding_guidelines:[
            "Consult with your veterinarian or a professional nutritionist to determine the appropriate amount of chews to feed your dog based on their size, age, and activity level."
            ,"Always supervise your dog while they are chewing on a treat or chew."
            ,"Choose chews that are appropriate for your dog's size and chewing ability. Avoid giving large dogs small chews, as they can be a choking hazard."
            ,"Monitor your dog's chewing behavior, and take the chew away if they start to break it into small pieces or swallow large pieces."
            ,"Keep an eye on the condition of the chew. If it becomes small enough to swallow whole or begins to break into small pieces, it is time to throw it away."
            ,"Keep in mind that chews should not be a replacement for a balanced diet. They should be given as a treat and not as a primary source of nutrition."
            ,"If you have any concerns about your dog's chew habits or if they have a history of gastrointestinal issues, it is always best to consult with a veterinarian before introducing new chews."
        ],
        nutrition_facts:[
            "Bull Pizzle","2992 Kcal/kg","93.3%","0.82%","3.33%","12.03%"
        ],
        image:{
            fileName: "product1",
            filePath:"https://res.cloudinary.com/drezwvhiy/image/upload/v1708476544/PElite/aqmtbynahljjijzhrtwt.jpg"
        },
        extra_images:[
            {
                fileName: "product1",
                filePath: "https://res.cloudinary.com/dh5j7sg3n/image/upload/v1702434217/product-1_axti05.jpg"        
            },
            {
                fileName: "product1",
                filePath: "https://res.cloudinary.com/dh5j7sg3n/image/upload/v1702434217/product-1_axti05.jpg"        
            },
            {
                fileName: "product1",
                filePath: "https://res.cloudinary.com/dh5j7sg3n/image/upload/v1702434217/product-1_axti05.jpg"        
            }
        ],
        age_consumption:["puppy","adult","senior"],
        size_consumption:["small","medium"]
    },
];

async function seedDatabase() {
    try {
        // await User.deleteMany();
        await Furniture.deleteMany();
        // const seededData = await User.insertMany(adminData);
        const seededFurniture = await Furniture.insertMany(furnitureData);
        console.log('Database seeded successfully:', seededFurniture);
        // console.log('Database seeded successfully:', seededData);
        mongoose.disconnect(); // Move disconnect here in the success case
    } catch (error) {
        console.error('Error seeding DB:', error);
        mongoose.disconnect(); // Move disconnect here in the error case
    }
}

seedDatabase();