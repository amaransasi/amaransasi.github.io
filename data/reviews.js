const reviews = [
  {
    user: {
      name: "Sharmila Belonderen",
      link: "https://www.google.com/maps/contrib/115493147811507145704?hl=en-US&sa=X&ved=2ahUKEwjCx7T9orPyAhVtKVkFHR2ID28QvvQBegQIARAZ",
      thumbnail:
        "https://lh3.googleusercontent.com/a-/AOh14Gj6zKIrupYfPsWqe9N443lxGfc3vevhoCwsaUTCzA=s40-c-c0x00000000-cc-rp-mo-br100",
      reviews: 1,
    },
    rating: 5,
    date: "3 weeks ago",
    summary: "Positive: Professionalism, Quality, Responsiveness, Value",
    snippet:
      "I'm from Malaysia and have been using MSK Travel services every time my trip to India. Transportation arrangement was excellent and vehicle condition is very tip top, clean and neat. Sasi is just very friendly, trustworthy and cooperative. Overall, I had an absolutely fantastic and well organized trip with MSK. Will definitely contact you for future trips to India! 😀",
    response: {
      date: "3 weeks ago",
      snippet: "Thank you Medam",
    },
  },
  {
    user: {
      name: "saresh Radhakrishnan",
      link: "https://www.google.com/maps/contrib/114765480768240718832?hl=en-US&sa=X&ved=2ahUKEwjCx7T9orPyAhVtKVkFHR2ID28QvvQBegQIARAp",
      thumbnail:
        "https://lh3.googleusercontent.com/a-/AOh14GhbnGRyjng16u0Uf4yNe41vcj50bT5OBi65D0A=s40-c-c0x00000000-cc-rp-mo-ba3-br100",
      local_guide: true,
      reviews: 5,
      photos: 199,
    },
    rating: 5,
    date: "3 months ago",
    summary: "Positive: Professionalism, Quality, Responsiveness, Value",
    snippet:
      "Positive: Professionalism, Quality, Responsiveness, ValueOur India memorable trip in 2015 with MSK Tour & Travels.",
    likes: 1,
    images: [
      "https://lh5.googleusercontent.com/p/AF1QipOopk7LOqw0G2LlWtmB9HHTtEWBs20oy2B3iEg=w100-h100-p-n-k-no",
      "https://lh5.googleusercontent.com/p/AF1QipOIGWWyOXMiXe3ndA6tuZbLXRkme3hB73ZlLog=w100-h100-p-n-k-no",
      "https://lh5.googleusercontent.com/p/AF1QipMlRvSl1sBfdv6cH6E9r4pAW_g_j1NR-l5RjIQ=w100-h100-p-n-k-no",
      "https://lh5.googleusercontent.com/p/AF1QipNNLjcjavtaVeLXYqWPoF6_cPQQkFhWPFcm_pM=w100-h100-p-n-k-no",
      "https://lh5.googleusercontent.com/p/AF1QipPlBIgGfwDJ6jKSabe1fSLQlB5E6PvZO8qonKo=w100-h100-p-n-k-no",
      "https://lh5.googleusercontent.com/p/AF1QipP10hXa0QB68mdbzM-6BfZM6fKPidrbU3JwIUY=w100-h100-p-n-k-no",
      "https://lh5.googleusercontent.com/p/AF1QipOD8kjbSS-VJtaou6h9G0azCr6avFgC05pmLyM=w100-h100-p-n-k-no",
      "https://lh5.googleusercontent.com/p/AF1QipO6MzRm6dv_7TgkijFXOfhlrNGIFZI0z2uyZ24=w100-h100-p-n-k-no",
      "https://lh5.googleusercontent.com/p/AF1QipPbftcdYnZ379Jt0BVQ4YAWIKRytV5xOpLz0Cw=w100-h100-p-n-k-no",
      "https://lh5.googleusercontent.com/p/AF1QipNv_0PnDC4iW6CRD_ovy9J7C2c_DAQ_LxUPqNw=w100-h100-p-n-k-no",
      "https://lh5.googleusercontent.com/p/AF1QipPqMgbOGc-gvNAcHbGACQv8i3Q2vEc2WT7JcG4=w100-h100-p-n-k-no",
      "https://lh5.googleusercontent.com/p/AF1QipNyRWb27Hval_ejaeCTTppEQVS7uaZTotmafow=w100-h100-p-n-k-no",
      "https://lh5.googleusercontent.com/p/AF1QipN3OLLBzSSXX4BC0SdOl1-bAqfpW7KAV5OITFU=w100-h100-p-n-k-no",
      "https://lh5.googleusercontent.com/p/AF1QipNqpKJcqyfo6t94sl9vRNZXM1QdxYtZhPlp3IQ=w100-h100-p-n-k-no",
      "https://lh5.googleusercontent.com/p/AF1QipMFwkTCXqQosnJn2DMmglMUd4EsyuMDucpWQA0=w100-h100-p-n-k-no",
      "https://lh5.googleusercontent.com/p/AF1QipMpz4fIKhxHjv1IspsjzgrduB-AEeENOt7bey4=w100-h100-p-n-k-no",
      "https://lh5.googleusercontent.com/p/AF1QipPWAZf_Y1b_jwZlYGu0X4tomyx-RiujPjRq9Us=w100-h100-p-n-k-no",
      "https://lh5.googleusercontent.com/p/AF1QipOLF6oUb5vIeMdPH14X0TJ7bf2ZNrqd5mlVRsI=w100-h100-p-n-k-no",
      "https://lh5.googleusercontent.com/p/AF1QipPzcu0QSuzgU-8teBPD4IVdKyDUuCq289Zs4p0=w100-h100-p-n-k-no",
      "https://lh5.googleusercontent.com/p/AF1QipMMYbzxNgfSqyu9D7P5NchFr8XZaJLd35NDcsE=w100-h100-p-n-k-no",
      "https://lh5.googleusercontent.com/p/AF1QipNPgxsMC0cHmyQz2hN_XVGflwdZWxySNqk5IWE=w100-h100-p-n-k-no",
      "https://lh5.googleusercontent.com/p/AF1QipPzuXF722FtWaNjDJD2Ecjht0snO7m_x4V0dKs=w100-h100-p-n-k-no",
      "https://lh5.googleusercontent.com/p/AF1QipMA_gHPlMnMfyRzbpgyN-bBLZbdH97E3HMG6fM=w100-h100-p-n-k-no",
      "https://lh5.googleusercontent.com/p/AF1QipPrJphI2m66av_fhbWdPd8WU_9L5X3dvfnXYSU=w100-h100-p-n-k-no",
      "https://lh5.googleusercontent.com/p/AF1QipNmz7F-hNGK2Z-wcxIqF_Ep8bQCz9_rveAqIww=w100-h100-p-n-k-no",
      "https://lh5.googleusercontent.com/p/AF1QipPakqY7ThtdMXVMpp-C7iVao29diDUZd7lGPEw=w100-h100-p-n-k-no",
      "https://lh5.googleusercontent.com/p/AF1QipN8DhG7XZEFgpsqRRFuO3wvZeRUBYF60s_guiA=w100-h100-p-n-k-no",
      "https://lh5.googleusercontent.com/p/AF1QipMdDFa4SkDBRyfmkji7rk2G3kb8VrOY1Ax20lw=w100-h100-p-n-k-no",
      "https://lh5.googleusercontent.com/p/AF1QipOpJoGZX5O5IJUTiWAr0LektpRvRX4lTR8k9t8=w100-h100-p-n-k-no",
      "https://lh5.googleusercontent.com/p/AF1QipNQfA4frcmGVVWhBR9rChJ8pBMjSNSgXPKel-0=w100-h100-p-n-k-no",
      "https://lh5.googleusercontent.com/p/AF1QipML9sfPHofzGugz1P9euR1GakF-u0EEgCyyNlQ=w100-h100-p-n-k-no",
      "https://lh5.googleusercontent.com/p/AF1QipNOj0vxwMke0RmZSUaT3X3oMFXvY-2sfxi0mU4=w100-h100-p-n-k-no",
      "https://lh5.googleusercontent.com/p/AF1QipP20fOEd9rWSXFobHN_HeWaqWe2mBEFTtd6edY=w100-h100-p-n-k-no",
      "https://lh5.googleusercontent.com/p/AF1QipPnlGk-FoMRlLiuZT_LmE5QTtZawEz-P2ze14A=w100-h100-p-n-k-no",
      "https://lh5.googleusercontent.com/p/AF1QipNivGGI-raXL-JB-YhCsFOOXcejpgYb8x8tiRc=w100-h100-p-n-k-no",
      "https://lh5.googleusercontent.com/p/AF1QipMu2k5XvGinTDixIm3xhx84H9RpJ7SBWwl6bnk=w100-h100-p-n-k-no",
      "https://lh5.googleusercontent.com/p/AF1QipMz63WWOamCYkLvHwQpMu4kOg-DWEk9D1n-YGE=w100-h100-p-n-k-no",
      "https://lh5.googleusercontent.com/p/AF1QipNG5nZx6nlxHYtrm5LZ9X67qjA0-E3qqZvGeRs=w100-h100-p-n-k-no",
      "https://lh5.googleusercontent.com/p/AF1QipNVYUjGnDln__tW-Y_DrUGjLQqeC_d-8uxebnk=w100-h100-p-n-k-no",
      "https://lh5.googleusercontent.com/p/AF1QipPwPXeddjyG3hjvvAfmlZmRiuWT0QoofNlUlIQ=w100-h100-p-n-k-no",
      "https://lh5.googleusercontent.com/p/AF1QipNV41YPtd3mdAw5OFkMz8bDVtrZJCQWPcFmY1I=w100-h100-p-n-k-no",
      "https://lh5.googleusercontent.com/p/AF1QipPnj2SiilU4rOZJtgrMEVa9RPl9NGDOhYgSjlU=w100-h100-p-n-k-no",
      "https://lh5.googleusercontent.com/p/AF1QipM6bYExKDDCp3NiR_hQm7eyMPvHd95dkwP7BwI=w100-h100-p-n-k-no",
      "https://lh5.googleusercontent.com/p/AF1QipO111OruLv-KulbFx_Uv8c6XsW1jOM0dNil10k=w100-h100-p-n-k-no",
      "https://lh5.googleusercontent.com/p/AF1QipOj4yplIkUT6Zq84QVh8kzGyxJR8g6bc9otKjs=w100-h100-p-n-k-no",
      "https://lh5.googleusercontent.com/p/AF1QipNLe2BcKuZSBCi5hPbyLLc9NZnS3epYnReDSfo=w100-h100-p-n-k-no",
      "https://lh5.googleusercontent.com/p/AF1QipPyTZaLZnSVnIK61-qAcc9YbZq-dWPaX2rrPWQ=w100-h100-p-n-k-no",
    ],
    response: {
      date: "3 months ago",
      snippet: "Thank you sir",
    },
  },
  {
    user: {
      name: "Thanesh Arumugam",
      link: "https://www.google.com/maps/contrib/117552719007366748287?hl=en-US&sa=X&ved=2ahUKEwjCx7T9orPyAhVtKVkFHR2ID28QvvQBegQIARBn",
      thumbnail:
        "https://lh3.googleusercontent.com/a/AATXAJx4JZZuIAaeCKcdFyicelI8s7YfB4PuMDOOnkXL=s40-c-c0x00000000-cc-rp-mo-br100",
      reviews: 12,
    },
    rating: 5,
    date: "4 months ago",
    summary: "Positive: Professionalism, Quality, Responsiveness, Value",
    snippet:
      "MSK has been very good tour guide for our family while we were in India.He is very punctual as well maintained his work ethics.He keeps his vehicle clean n hygienic.He knows temple in India very well compared to other guides.For family trips it is worth for you all to have a person like him to show around India regardless temple or tourists attraction.Kudos to MSK for his dedication. 👏🙏",
    response: {
      date: "4 months ago",
      snippet: "Thank you very much sir",
    },
  },
  {
    user: {
      name: "Arivin Raj",
      link: "https://www.google.com/maps/contrib/102792401625098436031?hl=en-US&sa=X&ved=2ahUKEwjCx7T9orPyAhVtKVkFHR2ID28QvvQBegQIARB2",
      thumbnail:
        "https://lh3.googleusercontent.com/a-/AOh14GiKa5zCMbJa-FIQgMcbXryKeWH0Yg5Hpt45pEPr2g=s40-c-c0x00000000-cc-rp-mo-br100",
      reviews: 3,
    },
    rating: 5,
    date: "4 months ago",
    summary: "Positive: Professionalism, Quality, Responsiveness, Value",
    snippet:
      "Sasi is a professional and humble driver and able to meet our requests. He knows the roads in Southern India and manage time effectively. The rates are reasonable and no hidden charges.Trustworthy and reliable driver to bring you around South India. Till to date, we never faced any issues.",
    likes: 1,
    response: {
      date: "4 months ago",
      snippet: "Thanks Anna",
    },
  },
  {
    user: {
      name: "nivas CT",
      link: "https://www.google.com/maps/contrib/112971136163389715400?hl=en-US&sa=X&ved=2ahUKEwjCx7T9orPyAhVtKVkFHR2ID28QvvQBegUIARCFAQ",
      thumbnail:
        "https://lh3.googleusercontent.com/a/AATXAJz_UZ4fp7Ea4-tKtCa3hFxXLnI3oZSxiuA2n1An=s40-c-c0x00000000-cc-rp-mo-ba2-br100",
      local_guide: true,
      reviews: 27,
      photos: 1,
    },
    rating: 5,
    date: "a month ago",
    summary: "Positive: Professionalism, Quality, Responsiveness, Value",
    snippet:
      "Positive: Professionalism, Quality, Responsiveness, ValueHighly trusted and professional Driver. Car is maintained very neat and sanitized regularly.",
    response: {
      date: "a month ago",
      snippet: "Thank you sir",
    },
  },
  {
    user: {
      name: "Parventhan Periasamy",
      link: "https://www.google.com/maps/contrib/101646523507344880457?hl=en-US&sa=X&ved=2ahUKEwjCx7T9orPyAhVtKVkFHR2ID28QvvQBegUIARCTAQ",
      thumbnail:
        "https://lh3.googleusercontent.com/a-/AOh14Gh1XwZV1jpPZNVjul4wsEEKJV5vmPi_-T5M0seaSg=s40-c-c0x00000000-cc-rp-mo-br100",
      reviews: 3,
    },
    rating: 5,
    date: "4 months ago",
    summary: "Positive: Professionalism, Quality, Responsiveness, Value",
    snippet:
      "MSK Tours & Travels very close to my heart. Most trustable, convenient and professional travel agency with very reasonable price. Their vehicles are always in best quality and very suitable for travellers from all age group. Sasi, with his adequate knowledge and vast experience, guided me to travel most of the prominent places in South India with very reasonable charges. He always care his customers like his own family. I had many memorable South India tours with MSK. MSK is always my choice... Keep up your best service...👍👍👍👍 - From Malaysia -",
    likes: 1,
    response: {
      date: "4 months ago",
      snippet: "Thank you bro",
    },
  },
  {
    user: {
      name: "Sathish Kumar Manoharan",
      link: "https://www.google.com/maps/contrib/102904037415408790624?hl=en-US&sa=X&ved=2ahUKEwjCx7T9orPyAhVtKVkFHR2ID28QvvQBegUIARCiAQ",
      thumbnail:
        "https://lh3.googleusercontent.com/a-/AOh14GgGCmEQA_Ns3w_m1wyabgLBtHvRPJShlEdYJF25VxM=s40-c-c0x00000000-cc-rp-mo-br100",
      reviews: 8,
    },
    rating: 5,
    date: "4 months ago",
    summary: "Positive: Professionalism, Quality, Responsiveness, Value",
    snippet:
      "Dear friends,Being a Associate Professor, I know sasi Kumar(MSK TRAVELS)for the past 15 years. I will regularly hire his car for long travel. He is very professional and humanitarian, the way he takes care of passengers is awesome. He is not only comes with us as a driver. He also shares lot of information about the place which we are going to visit, more like a guide. As he knows all over southern India, he gives better options to stay based upon our budget and also the hotels to eat. Several times I traveled with aged people, he is very compassionate with them. The way he drives is splendid and utmost safety. Moreover, he loves his car like his own son. Every day we can see a neat and tidy car before starting the Journey. I strongly recommend his travels.",
    likes: 2,
    response: {
      date: "4 months ago",
      snippet: "Thank you very much sir",
    },
  },
  {
    user: {
      name: "Radhakrishnan O.N.",
      link: "https://www.google.com/maps/contrib/103527511336829327260?hl=en-US&sa=X&ved=2ahUKEwjCx7T9orPyAhVtKVkFHR2ID28QvvQBegUIARCxAQ",
      thumbnail:
        "https://lh3.googleusercontent.com/a/AATXAJzLjthPynwjc9DKbJO-IBlcoRtQdGqrG344DJOB=s40-c-c0x00000000-cc-rp-mo-br100",
      reviews: 1,
    },
    rating: 5,
    date: "3 months ago",
    snippet:
      "Very good quality of service. Driver named Pandian (Toyota Innova) was a very nice person with helping mentality during the entire travel to airport at late night and also while returning.",
    response: {
      date: "3 months ago",
      snippet: "Thank you sir",
    },
  },
  {
    user: {
      name: "Kumar Saravana",
      link: "https://www.google.com/maps/contrib/116899360856698685101?hl=en-US&sa=X&ved=2ahUKEwjCx7T9orPyAhVtKVkFHR2ID28QvvQBegUIARC8AQ",
      thumbnail:
        "https://lh3.googleusercontent.com/a/AATXAJzAMNOWoEti29GeWcLzGOxbo-GeishD42Zuyt9J=s40-c-c0x00000000-cc-rp-mo-br100",
      reviews: 1,
    },
    rating: 5,
    date: "4 months ago",
    summary: "Positive: Professionalism, Quality, Responsiveness, Value",
    snippet:
      "Positive: Professionalism, Quality, Responsiveness, ValueVery good service. Relieble personnel. Vast knowledge regarding all aspects.",
    likes: 1,
    response: {
      date: "4 months ago",
      snippet: "Thank you so much Anna",
    },
  },
  {
    user: {
      name: "Srinath Rajagopalan",
      link: "https://www.google.com/maps/contrib/108108465994603405452?hl=en-US&sa=X&ved=2ahUKEwjCx7T9orPyAhVtKVkFHR2ID28QvvQBegUIARDKAQ",
      thumbnail:
        "https://lh3.googleusercontent.com/a/AATXAJxTlLjde-qZA7zYENJ0wNeGjytNGimjFy1GweJu=s40-c-c0x00000000-cc-rp-mo-br100",
      reviews: 2,
    },
    rating: 5,
    date: "4 months ago",
    summary: "Positive: Professionalism, Quality, Responsiveness, Value",
    snippet:
      "One God loving person best suited for any pilgrimage trip. I vouch Mr. Sasikumar for such wonderful religious trips traveling along with family.First preference to Safety, Helping nature, pleasing personality, well maintained vechile.Assist us with identifying Vegetarian food hotels during our trips.Saves time by choosing best routes to reach your destination.My aged parents always feel secure while traveling with Mr. Sasikumar.He has taken us to Tirumala - Tirupati(One day trip) , Tirunallar Temple, Vatheeswarar Temple, Thirukadeiyur Temple, Panchamuki Hanuman Temple (One day trip - Same day return) in this year 2021.He drops you at staircase nearby to Vikuntam Entry point for getting closer to Special Darshan queue and picks up from Ram Bageecha. Helped alot for my elderly parents to have Lord Venky's Darshan.We are associated with MSK for last 10 years.",
    likes: 1,
    response: {
      date: "4 months ago",
      snippet: "Thank you so much sir",
    },
  },
  {
    user: {
      name: "Naveen Kumar",
      link: "https://www.google.com/maps/contrib/101084916337709818290?hl=en-US&sa=X&ved=2ahUKEwjo_vK0o7PyAhWYZ80KHWNtByEQvvQBegQIARAT",
      thumbnail:
        "https://lh3.googleusercontent.com/a-/AOh14GjXCktZLk4dRZSGZZEvXBj75L5pJcrxUICz19Gxrw=s40-c-c0x00000000-cc-rp-mo-br100",
      reviews: 2,
    },
    rating: 5,
    date: "4 months ago",
    summary: "Positive: Professionalism, Quality, Responsiveness, Value",
    snippet:
      "Positive: Professionalism, Quality, Responsiveness, ValueI hired a cab for my home town visit, I feel very comfortable. Cab looks very clean and Driver behaved professional.",
    response: {
      date: "4 months ago",
      snippet: "Thank you sir",
    },
  },
  {
    user: {
      name: "Muthu Lakshmi",
      link: "https://www.google.com/maps/contrib/106098568428445882219?hl=en-US&sa=X&ved=2ahUKEwjo_vK0o7PyAhWYZ80KHWNtByEQvvQBegQIARAh",
      thumbnail:
        "https://lh3.googleusercontent.com/a/AATXAJzqd-lg-xv6wPOE19avOHs0s0gwV5CYSpK1eJ-3=s40-c-c0x00000000-cc-rp-mo-br100",
      reviews: 1,
    },
    rating: 5,
    date: "4 months ago",
    summary: "Positive: Quality",
    snippet:
      "Positive: QualityOur family members went to chennai. MSK travels services for us very responsively.",
    response: {
      date: "4 months ago",
      snippet: "Thank you medam",
    },
  },
  {
    user: {
      name: "Aravindh Sivalingam",
      link: "https://www.google.com/maps/contrib/104446265492310527773?hl=en-US&sa=X&ved=2ahUKEwjo_vK0o7PyAhWYZ80KHWNtByEQvvQBegQIARAv",
      thumbnail:
        "https://lh3.googleusercontent.com/a-/AOh14GjhjRdQFTyP-lDg0Ib_WG0SwNVkhOqcbjcrwUEeSw=s40-c-c0x00000000-cc-rp-mo-ba4-br100",
      local_guide: true,
      reviews: 46,
      photos: 13,
    },
    rating: 5,
    date: "4 months ago",
    summary: "Positive: Professionalism, Quality, Responsiveness, Value",
    snippet:
      "Positive: Professionalism, Quality, Responsiveness, ValueGreat Service, Excellent Communication, Highly Professional, I suggest the travels for sure regardless the destinations...",
    likes: 1,
    response: {
      date: "4 months ago",
      snippet: "Thank you Mr. Aravind",
    },
  },
  {
    user: {
      name: "PRASANTH .P",
      link: "https://www.google.com/maps/contrib/107223038210468294111?hl=en-US&sa=X&ved=2ahUKEwjo_vK0o7PyAhWYZ80KHWNtByEQvvQBegQIARA9",
      thumbnail:
        "https://lh3.googleusercontent.com/a-/AOh14GhjEgII-Jq1rG6M2UZVMUxLA2sakdhYVzCBDfe9Hg=s40-c-c0x00000000-cc-rp-mo-br100",
      reviews: 2,
    },
    rating: 5,
    date: "3 weeks ago",
    summary: "Positive: Professionalism, Quality, Responsiveness, Value",
    snippet:
      "Positive: Professionalism, Quality, Responsiveness, ValueExcellent service",
    response: {
      date: "3 weeks ago",
      snippet: "Thank you sir",
    },
  },
  {
    user: {
      name: "Mahindran Pannir Selvam",
      link: "https://www.google.com/maps/contrib/114772028213532707214?hl=en-US&sa=X&ved=2ahUKEwjo_vK0o7PyAhWYZ80KHWNtByEQvvQBegQIARBM",
      thumbnail:
        "https://lh3.googleusercontent.com/a/AATXAJx_n6DcKIuvIH_iTriulvc4mQYgdgAwZtsSuK7e=s40-c-c0x00000000-cc-rp-mo-br100",
      reviews: 1,
    },
    rating: 5,
    date: "4 months ago",
    summary: "Positive: Professionalism, Quality, Responsiveness, Value",
    snippet:
      "Positive: Professionalism, Quality, Responsiveness, ValueHad a convenient trip",
    response: {
      date: "4 months ago",
      snippet: "Thank you brother",
    },
  },
  {
    user: {
      name: "athi athi",
      link: "https://www.google.com/maps/contrib/107591803152376674963?hl=en-US&sa=X&ved=2ahUKEwjo_vK0o7PyAhWYZ80KHWNtByEQvvQBegQIARBa",
      thumbnail:
        "https://lh3.googleusercontent.com/a-/AOh14GhJ_DY9V4uojc2jBcgyVCkCiJJV_W_tKTfE4PxAgA=s40-c-c0x00000000-cc-rp-mo-br100",
      reviews: 3,
    },
    rating: 5,
    date: "4 months ago",
    summary: "Positive: Value",
    snippet: "Positive: ValueSuper services",
    likes: 1,
    response: {
      date: "4 months ago",
      snippet: "Thank you Mr.Athi",
    },
  },
  {
    user: {
      name: "Sangeetha B",
      link: "https://www.google.com/maps/contrib/100132616635855696903?hl=en-US&sa=X&ved=2ahUKEwjo_vK0o7PyAhWYZ80KHWNtByEQvvQBegQIARBo",
      thumbnail:
        "https://lh3.googleusercontent.com/a/AATXAJzyE7oGQ8IVXyU0Nr-eIGhha2AUF3cAyYxTgFiq=s40-c-c0x00000000-cc-rp-mo-br100",
    },
    rating: 5,
    date: "3 months ago",
    summary: "Positive: Professionalism, Quality, Responsiveness, Value",
    snippet: "Positive: Professionalism, Quality, Responsiveness, Value",
  },
  {
    user: {
      name: "Susainathan Gerald",
      link: "https://www.google.com/maps/contrib/101625639736851014206?hl=en-US&sa=X&ved=2ahUKEwjo_vK0o7PyAhWYZ80KHWNtByEQvvQBegQIARBy",
      thumbnail:
        "https://lh3.googleusercontent.com/a/AATXAJwvpt2wdBVJ-wd3U_gZU0sEnOwb272pd0TU93RV=s40-c-c0x00000000-cc-rp-mo-br100",
    },
    rating: 5,
    date: "4 months ago",
    summary: "Positive: Professionalism, Quality, Responsiveness, Value",
    snippet: "Positive: Professionalism, Quality, Responsiveness, Value",
    response: {
      date: "4 months ago",
      snippet: "Thanks Anna",
    },
  },
  {
    user: {
      name: "thanapal m",
      link: "https://www.google.com/maps/contrib/118006958710536291664?hl=en-US&sa=X&ved=2ahUKEwjo_vK0o7PyAhWYZ80KHWNtByEQvvQBegQIARB8",
      thumbnail:
        "https://lh3.googleusercontent.com/a-/AOh14GiwF0_MkrvuwWDBBGfkPNcNulEHzM2viIbjh6Zz7A=s40-c-c0x00000000-cc-rp-mo-br100",
    },
    rating: 5,
    date: "2 weeks ago",
    summary: "Positive: Quality, Value",
    snippet: "Positive: Quality, Value",
  },
  {
    user: {
      name: "Mk Pandian",
      link: "https://www.google.com/maps/contrib/109281800034872514958?hl=en-US&sa=X&ved=2ahUKEwjo_vK0o7PyAhWYZ80KHWNtByEQvvQBegUIARCHAQ",
      thumbnail:
        "https://lh3.googleusercontent.com/a/AATXAJyPKTO6oY-M4aizX-y05RpLO5LzL2k7Jn80-srZ=s40-c-c0x00000000-cc-rp-mo-br100",
    },
    rating: 5,
    date: "4 months ago",
    summary: "Positive: Quality",
    snippet: "Positive: Quality",
    response: {
      date: "4 months ago",
      snippet: "Thank you Pandian",
    },
  },
  {
    user: {
      name: "Thurai Harissh batch 2",
      link: "https://www.google.com/maps/contrib/110605724799605489157?hl=en-US&sa=X&ved=2ahUKEwjT-Iy6o7PyAhVJCM0KHWbWB9MQvvQBegQIARAT",
      thumbnail:
        "https://lh3.googleusercontent.com/a-/AOh14GhyVB6bGqirgZA6hM4udi8Gg0edDyO_z8oWRdPLfA=s40-c-c0x00000000-cc-rp-mo-br100",
    },
    rating: 5,
    date: "4 months ago",
    summary: "Positive: Professionalism, Quality, Value",
    snippet: "Positive: Professionalism, Quality, Value",
    response: {
      date: "4 months ago",
      snippet: "Thank you harissh",
    },
  },
];
