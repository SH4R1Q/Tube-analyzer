import React, { Component } from 'react'
import Channel from './Channel'
import Comments from './Comments'
import Video from './Video';
import { isVisible } from '@testing-library/user-event/dist/utils';
import Error from './Error';

export default class Analysis extends Component {

    video = {
        "author": {
            "avatar": [
                {
                    "height": 48,
                    "url": "https://yt3.ggpht.com/oQ2NQMuq-9IS6_MZdsGXa0RWecaACremA01Z7jo-YpoEF1H6PyUF8PZzXkV10OYwSP3UMJDeTg=s48-c-k-c0x00ffffff-no-rj",
                    "width": 48
                },
                {
                    "height": 88,
                    "url": "https://yt3.ggpht.com/oQ2NQMuq-9IS6_MZdsGXa0RWecaACremA01Z7jo-YpoEF1H6PyUF8PZzXkV10OYwSP3UMJDeTg=s88-c-k-c0x00ffffff-no-rj",
                    "width": 88
                },
                {
                    "height": 176,
                    "url": "https://yt3.ggpht.com/oQ2NQMuq-9IS6_MZdsGXa0RWecaACremA01Z7jo-YpoEF1H6PyUF8PZzXkV10OYwSP3UMJDeTg=s176-c-k-c0x00ffffff-no-rj",
                    "width": 176
                }
            ],
            "badges": [
                {
                    "text": "Verified",
                    "type": "VERIFIED_CHANNEL"
                }
            ],
            "canonicalBaseUrl": "/@dhruvrathee",
            "channelId": "UC-CSyyi47VX1lD9zyeABW3w",
            "stats": {
                "subscribers": 11200000,
                "subscribersText": "11.2M subscribers"
            },
            "title": "Dhruv Rathee"
        },
        "captions": [
            {
                "language": {
                    "code": "en",
                    "name": "English"
                },
                "url": "https://www.youtube.com/api/timedtext?v=id00R-3OmJ0&caps=asr&opi=112496729&xoaf=5&hl=en&ip=0.0.0.0&ipbits=0&expire=1685883679&sparams=ip,ipbits,expire,v,caps,opi,xoaf&signature=852C361A24BEBF8ADD2FE6674F249D9B3A438AE8.132DC8CA22C4ED9A9DDBFF3FC9F162843D37A774&key=yt8&lang=en"
            }
        ],
        "cards": [
            null
        ],
        "category": "Education",
        "chapters": [],
        "description": "The Titanic is probably one of the most popular Ships in the world due to the tragic incident associated with it. It was a British passenger ship traveling from England to the United States, which faced a collision with an iceberg, leading to a devastating accident that resulted in the loss 1500+ People. This accident to date is considered one of the most disastrous events in history. But what exactly happened? What is the real story behind the Fall of the Titanic? Watch this video to find out!\n\n---------------------------------------------------- \nJOIN MY COURSE: \n✏️ Are you curious about how I manage to travel so much and still stay productive? Learn how to manage time and maximize productivity in my specialised online course. Join here: https://academy.dhruvrathee.com\nUse GET20 for a straight up 20% discount!\n\nLISTEN TO MY PODCAST: \n🎧 My Spotify exclusive podcast. Learn about how India works, only on Maha Bharat with Dhruv Rathee: https://spoti.fi/3IhBW51\n\nFOLLOW ME ON:\n📩 Telegram: https://t.me/dhruvratheechannel \n📸 Instagram: http://www.instagram.com/dhruvrathee\n🐦  Twitter: http://www.twitter.com/dhruv_rathee\n▶️ Main Channel: http://www.youtube.com/dhruvrathee\n🎦 Vlog Channel: http://www.youtube.com/dhruvratheevlogs\n🩳 Shorts Channel: https://www.youtube.com/channel/UCw4IHIMsDO5wpIiprOSXiEA\n\nMY VIDEO TOPICS:\n🗺 Geopolitics: https://youtube.com/playlist?list=PL8828Z-IEhFGkz7F_paNquqsFyd357oYA\n📘 History: https://youtube.com/playlist?list=PL8828Z-IEhFGSI3R-AkaB95EJBO7nBjGS\n🔬 Science: https://youtube.com/playlist?list=PL8828Z-IEhFGrt2Tf1b0qg40g3AFw4YKp\n☠️ Mystery: https://youtube.com/playlist?list=PL8828Z-IEhFGF2LJQrRHRtoEfS7BZHZIK\n💰Finance: https://youtube.com/playlist?list=PL8828Z-IEhFEG47-MiL0G7Mh6J-T8eBoq\n🇮🇳 Indian Current Affairs: https://youtube.com/playlist?list=PL8828Z-IEhFErzy-eKRAiTta0GLrzn6fM\n🌍 International Current Affairs: https://youtube.com/playlist?list=PL8828Z-IEhFFs3hT95-ZnEHDyLduo40FU\n\nDOWNLOAD MY APP: \n📱Android app: https://play.google.com/store/apps/details?id=com.arStudios.dhruvRatheeApp&hl=en&gl=US\n📱iOS App: https://apps.apple.com/ie/app/dhruv-rathee/id1553920898\n----------------------------------------------------",
        "endScreen": {
            "items": [
                {
                    "channel": {
                        "avatar": [
                            {
                                "height": 250,
                                "url": "https://yt3.ggpht.com/oQ2NQMuq-9IS6_MZdsGXa0RWecaACremA01Z7jo-YpoEF1H6PyUF8PZzXkV10OYwSP3UMJDeTg=s250-c-k-c0x00ffffff-no-rj",
                                "width": 250
                            },
                            {
                                "height": 400,
                                "url": "https://yt3.ggpht.com/oQ2NQMuq-9IS6_MZdsGXa0RWecaACremA01Z7jo-YpoEF1H6PyUF8PZzXkV10OYwSP3UMJDeTg=s400-c-k-c0x00ffffff-no-rj",
                                "width": 400
                            }
                        ],
                        "channelId": "UC-CSyyi47VX1lD9zyeABW3w",
                        "description": "I love breaking down complex issues in simple words. \n\nLearning, Awareness and Education is the purpose of this channel. Dhruv Rathee is a Youtube educator whose expertise lies in doing simplified and objective explainers of complex topics. Educate yourself on important things which matter in your life and learn how you can make the world a better place for yourself and for everyone else! \n\nBe the change you want to see. Join in by clicking the Subscribe button! :)\n",
                        "title": "Dhruv Rathee"
                    },
                    "type": "channel"
                },
                {
                    "channel": {
                        "avatar": [
                            {
                                "height": 250,
                                "url": "https://yt3.ggpht.com/ytc/AGIKgqN-5SjIbuCS0gWHa1d8kpH0CYz6EVoSGvTl8ynZaQ=s250-c-k-c0x00ffffff-no-rj",
                                "width": 250
                            },
                            {
                                "height": 400,
                                "url": "https://yt3.ggpht.com/ytc/AGIKgqN-5SjIbuCS0gWHa1d8kpH0CYz6EVoSGvTl8ynZaQ=s400-c-k-c0x00ffffff-no-rj",
                                "width": 400
                            }
                        ],
                        "channelId": "UCjNgqJ_FMLntYVzq7daw1TQ",
                        "description": "My Vlog Channel",
                        "title": "Dhruv Rathee Vlogs"
                    },
                    "type": "channel"
                },
                {
                    "type": "video",
                    "video": {
                        "lengthSeconds": 1177,
                        "stats": {
                            "views": 11473820
                        },
                        "thumbnails": [
                            {
                                "height": 94,
                                "url": "https://i.ytimg.com/vi/890wWM0lg94/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDL907Pjp6W7DWxN3s43sUIFWBC5g",
                                "width": 168
                            },
                            {
                                "height": 110,
                                "url": "https://i.ytimg.com/vi/890wWM0lg94/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBpyp-KV-gvO2BiXjd7hVPMcVjSxg",
                                "width": 196
                            },
                            {
                                "height": 138,
                                "url": "https://i.ytimg.com/vi/890wWM0lg94/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDp405bq6qlsdKE44A4rEjUSY0v_A",
                                "width": 246
                            },
                            {
                                "height": 188,
                                "url": "https://i.ytimg.com/vi/890wWM0lg94/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB1idFy2hicln4QY24jUW0etrm7-Q",
                                "width": 336
                            },
                            {
                                "height": 1080,
                                "url": "https://i.ytimg.com/vi_webp/890wWM0lg94/maxresdefault.webp",
                                "width": 1920
                            }
                        ],
                        "title": "Biggest Mystery in Aviation | What happened to MH370 Flight? | Dhruv Rathee",
                        "videoId": "890wWM0lg94"
                    }
                },
                {
                    "playlist": {
                        "playlistId": "PL8828Z-IEhFGF2LJQrRHRtoEfS7BZHZIK",
                        "stats": {
                            "videos": 23
                        },
                        "thumbnails": [
                            {
                                "height": 94,
                                "url": "https://i.ytimg.com/vi/GO8f9MBdCOQ/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAII5rfBzGWPpw827OMsIw3LC5OUQ",
                                "width": 168
                            },
                            {
                                "height": 110,
                                "url": "https://i.ytimg.com/vi/GO8f9MBdCOQ/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAvc-fFzrkGAKKlRXz1lIZ5ZZvMLg",
                                "width": 196
                            },
                            {
                                "height": 138,
                                "url": "https://i.ytimg.com/vi/GO8f9MBdCOQ/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA_RlkcJzG3r7bCImdwEA5oFWmFiA",
                                "width": 246
                            },
                            {
                                "height": 188,
                                "url": "https://i.ytimg.com/vi/GO8f9MBdCOQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBod4nAsIsIzQ1ORVyxqJh-niJMqg",
                                "width": 336
                            },
                            {
                                "height": 1080,
                                "url": "https://i.ytimg.com/vi_webp/GO8f9MBdCOQ/maxresdefault.webp",
                                "width": 1920
                            }
                        ],
                        "title": "Mystery Videos"
                    },
                    "type": "playlist"
                }
            ]
        },
        "isLiveContent": false,
        "isLiveNow": false,
        "keywords": [
            "Dhruv Rathee",
            "indian youtuber",
            "khan sir",
            "khan sir patna",
            "dhruv rathee latest video",
            "dhruv rathee",
            "titanic 2",
            "titanic picture",
            "titanic 2 full movie",
            "titanic ship accident video",
            "titanic ship kaise duba",
            "titanic ship story",
            "titanic scene",
            "titanic ship underwater",
            "titanic ship sinking scene",
            "titanic",
            "titanic heroine name and details",
            "titanic never sank",
            "titanic ship movie",
            "titanic ship video",
            "titanic story in hindi",
            "titanic story real",
            "mystery",
            "ship",
            "titanic story real life"
        ],
        "lengthSeconds": 1069,
        "musics": [],
        "publishedDate": "2022-05-24",
        "stats": {
            "comments": 7769,
            "likes": 440615,
            "views": 13579135
        },
        "superTitle": {
            "items": []
        },
        "thumbnails": [
            {
                "height": 94,
                "url": "https://i.ytimg.com/vi/id00R-3OmJ0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDndzXcviXsg85KepVqcjeKXrP-Tg",
                "width": 168
            },
            {
                "height": 110,
                "url": "https://i.ytimg.com/vi/id00R-3OmJ0/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDMTetuG0dcL2mHkXtI0A6mcOBvhQ",
                "width": 196
            },
            {
                "height": 138,
                "url": "https://i.ytimg.com/vi/id00R-3OmJ0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBltgiKJzeZBq04INXt_4m_0b5DBA",
                "width": 246
            },
            {
                "height": 188,
                "url": "https://i.ytimg.com/vi/id00R-3OmJ0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLABq1DuQKE_I4EhtY-haITur1eM0A",
                "width": 336
            },
            {
                "height": 1080,
                "url": "https://i.ytimg.com/vi/id00R-3OmJ0/maxresdefault.jpg",
                "width": 1920
            }
        ],
        "title": "Mystery of Titanic | How the World's Greatest Ship Disappeared? | Dhruv Rathee in Hindi",
        "videoId": "id00R-3OmJ0"
    }

    channel = {
        "artistBio": null,
        "avatar": [
            {
                "height": 48,
                "url": "https://yt3.googleusercontent.com/b-XT4UgryGzYcT9TP6oxGoXuNDYWz8SUOtKFct0mCIB5irWhXK_ML6kbHM91nd8a0ApeMn2i=s48-c-k-c0x00ffffff-no-rj",
                "width": 48
            },
            {
                "height": 88,
                "url": "https://yt3.googleusercontent.com/b-XT4UgryGzYcT9TP6oxGoXuNDYWz8SUOtKFct0mCIB5irWhXK_ML6kbHM91nd8a0ApeMn2i=s88-c-k-c0x00ffffff-no-rj",
                "width": 88
            },
            {
                "height": 176,
                "url": "https://yt3.googleusercontent.com/b-XT4UgryGzYcT9TP6oxGoXuNDYWz8SUOtKFct0mCIB5irWhXK_ML6kbHM91nd8a0ApeMn2i=s176-c-k-c0x00ffffff-no-rj",
                "width": 176
            }
        ],
        "badges": [
            {
                "text": "Verified",
                "type": "VERIFIED_CHANNEL"
            }
        ],
        "banner": {
            "desktop": [
                {
                    "height": 175,
                    "url": "https://yt3.googleusercontent.com/XC-a8ergBnll-p8s8roSUmb5c9x5POzNFopwwURVC_cSeIrTxc50_uJlpb2zsBj-GzLBiKjqcA=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
                    "width": 1060
                },
                {
                    "height": 188,
                    "url": "https://yt3.googleusercontent.com/XC-a8ergBnll-p8s8roSUmb5c9x5POzNFopwwURVC_cSeIrTxc50_uJlpb2zsBj-GzLBiKjqcA=w1138-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
                    "width": 1138
                },
                {
                    "height": 283,
                    "url": "https://yt3.googleusercontent.com/XC-a8ergBnll-p8s8roSUmb5c9x5POzNFopwwURVC_cSeIrTxc50_uJlpb2zsBj-GzLBiKjqcA=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
                    "width": 1707
                },
                {
                    "height": 351,
                    "url": "https://yt3.googleusercontent.com/XC-a8ergBnll-p8s8roSUmb5c9x5POzNFopwwURVC_cSeIrTxc50_uJlpb2zsBj-GzLBiKjqcA=w2120-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
                    "width": 2120
                },
                {
                    "height": 377,
                    "url": "https://yt3.googleusercontent.com/XC-a8ergBnll-p8s8roSUmb5c9x5POzNFopwwURVC_cSeIrTxc50_uJlpb2zsBj-GzLBiKjqcA=w2276-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
                    "width": 2276
                },
                {
                    "height": 424,
                    "url": "https://yt3.googleusercontent.com/XC-a8ergBnll-p8s8roSUmb5c9x5POzNFopwwURVC_cSeIrTxc50_uJlpb2zsBj-GzLBiKjqcA=w2560-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
                    "width": 2560
                }
            ],
            "mobile": [
                {
                    "height": 88,
                    "url": "https://yt3.googleusercontent.com/XC-a8ergBnll-p8s8roSUmb5c9x5POzNFopwwURVC_cSeIrTxc50_uJlpb2zsBj-GzLBiKjqcA=w320-fcrop64=1,32b75a57cd48a5a8-k-c0xffffffff-no-nd-rj",
                    "width": 320
                },
                {
                    "height": 175,
                    "url": "https://yt3.googleusercontent.com/XC-a8ergBnll-p8s8roSUmb5c9x5POzNFopwwURVC_cSeIrTxc50_uJlpb2zsBj-GzLBiKjqcA=w640-fcrop64=1,32b75a57cd48a5a8-k-c0xffffffff-no-nd-rj",
                    "width": 640
                },
                {
                    "height": 263,
                    "url": "https://yt3.googleusercontent.com/XC-a8ergBnll-p8s8roSUmb5c9x5POzNFopwwURVC_cSeIrTxc50_uJlpb2zsBj-GzLBiKjqcA=w960-fcrop64=1,32b75a57cd48a5a8-k-c0xffffffff-no-nd-rj",
                    "width": 960
                },
                {
                    "height": 351,
                    "url": "https://yt3.googleusercontent.com/XC-a8ergBnll-p8s8roSUmb5c9x5POzNFopwwURVC_cSeIrTxc50_uJlpb2zsBj-GzLBiKjqcA=w1280-fcrop64=1,32b75a57cd48a5a8-k-c0xffffffff-no-nd-rj",
                    "width": 1280
                },
                {
                    "height": 395,
                    "url": "https://yt3.googleusercontent.com/XC-a8ergBnll-p8s8roSUmb5c9x5POzNFopwwURVC_cSeIrTxc50_uJlpb2zsBj-GzLBiKjqcA=w1440-fcrop64=1,32b75a57cd48a5a8-k-c0xffffffff-no-nd-rj",
                    "width": 1440
                }
            ],
            "tv": [
                {
                    "height": 180,
                    "url": "https://yt3.googleusercontent.com/XC-a8ergBnll-p8s8roSUmb5c9x5POzNFopwwURVC_cSeIrTxc50_uJlpb2zsBj-GzLBiKjqcA=w320-fcrop64=1,00000000ffffffff-k-c0xffffffff-no-nd-rj",
                    "width": 320
                },
                {
                    "height": 480,
                    "url": "https://yt3.googleusercontent.com/XC-a8ergBnll-p8s8roSUmb5c9x5POzNFopwwURVC_cSeIrTxc50_uJlpb2zsBj-GzLBiKjqcA=w854-fcrop64=1,00000000ffffffff-k-c0xffffffff-no-nd-rj",
                    "width": 854
                },
                {
                    "height": 720,
                    "url": "https://yt3.googleusercontent.com/XC-a8ergBnll-p8s8roSUmb5c9x5POzNFopwwURVC_cSeIrTxc50_uJlpb2zsBj-GzLBiKjqcA=w1280-fcrop64=1,00000000ffffffff-k-c0xffffffff-no-nd-rj",
                    "width": 1280
                },
                {
                    "height": 1080,
                    "url": "https://yt3.googleusercontent.com/XC-a8ergBnll-p8s8roSUmb5c9x5POzNFopwwURVC_cSeIrTxc50_uJlpb2zsBj-GzLBiKjqcA=w1920-fcrop64=1,00000000ffffffff-k-c0xffffffff-no-nd-rj",
                    "width": 1920
                },
                {
                    "height": 1192,
                    "url": "https://yt3.googleusercontent.com/XC-a8ergBnll-p8s8roSUmb5c9x5POzNFopwwURVC_cSeIrTxc50_uJlpb2zsBj-GzLBiKjqcA=w2120-fcrop64=1,00000000ffffffff-k-c0xffffffff-no-nd-rj",
                    "width": 2120
                }
            ]
        },
        "canonicalBaseUrl": "/@AbhiandNiyu",
        "channelId": "UCsDTy8jvHcwMvSZf_JGi-FA",
        "country": "India",
        "description": "Abhi and Niyu are a husband-wife content creators duo who started their journey with the purpose to make the internet positive and put positive news in front of people. Their series 100 Reasons to Love India brought out positive stories about India, India's changemakers, our history, culture and created an army of people who work to find solutions to everyday problems. \n\nFeatured in Forbes 30 under 30\nMost Impactful Influencer of the Year 2020\n\nWe are here to tell you stories about the REAL INDIA that the mainstream media ignores. We are here to share solutions. We are here to make YOU INDIA POSITIVE!\n#followinglove #abhiandniyu #farakpadtahai\n\nFind our Podcast Recommendation Channel on Telegram\nt.me/abhiandniyupodcasts",
        "hasBusinessEmail": true,
        "joinedDate": "2018-04-02",
        "joinedDateText": "Joined Apr 2, 2018",
        "keywords": [
            "Following Love",
            "Abhiraj Rajadhyaksha",
            "India",
            "abhiandniyu",
            "abhi and niyu",
            "abhi and niyu exposed",
            "abhi and niyu career",
            "abhi and niyu latest",
            "education",
            "career guidance",
            "positive stories",
            "bharat",
            "indian youtuber",
            "indian news",
            "latest news",
            "hindi news",
            "current issues",
            "hindu",
            "hindu culture",
            "infotainment",
            "indiancouple",
            "Mindset",
            "Growth"
        ],
        "links": [
            {
                "icon": "https://encrypted-tbn3.gstatic.com/favicon-tbn?q=tbn:ANd9GcSxUwGjsJZApoUKonOfNzxpFkEMyf29jwvspkLH1CA-JP5Nx06tcApyuGcjdsPZWzHuoyTRot1jS2gOtE_pzWKSSaJg0t0MtrRw6u7ZcItl78fGxuhb",
                "targetUrl": "https://www.facebook.com/followinglovefilms",
                "title": "Facebook"
            },
            {
                "icon": "https://encrypted-tbn3.gstatic.com/favicon-tbn?q=tbn:ANd9GcSfLSwm05yS0BK4Kb28e-NTcQAsNLQfDCkRW2BwGzQ_4QLgT3HvRwy5O9kLRnUU-QhzvJantOSGhq8NOQp7EHd_WEvUNR6WW1Pp0THXuSRzNiJgToeoCA",
                "targetUrl": "https://www.instagram.com/abhiandniyu/",
                "title": "Instagram"
            },
            {
                "icon": "https://encrypted-tbn0.gstatic.com/favicon-tbn?q=tbn:ANd9GcTCl87OfLKVJ9rK8xDL2fO43Nn-qwO3MZqhD6Va_y_Dj4NQN5vi_7wfFsqVPVk5OJarybTLaqbvqdn3Oj1nmlMBa_srPR9cF0lTX47Loj-ftw",
                "targetUrl": "https://twitter.com/abhiandniyu",
                "title": "Twitter"
            }
        ],
        "stats": {
            "subscribers": 4390000,
            "subscribersText": "4.39M subscribers",
            "videos": 699,
            "videosText": "699 videos",
            "views": 620158206
        },
        "title": "Abhi and Niyu",
        "username": "@AbhiandNiyu"
    }

    com = {
        "comments": [
            {
                "author": {
                    "avatar": [
                        {
                            "height": 48,
                            "url": "https://yt3.ggpht.com/oQ2NQMuq-9IS6_MZdsGXa0RWecaACremA01Z7jo-YpoEF1H6PyUF8PZzXkV10OYwSP3UMJDeTg=s48-c-k-c0x00ffffff-no-rj",
                            "width": 48
                        },
                        {
                            "height": 88,
                            "url": "https://yt3.ggpht.com/oQ2NQMuq-9IS6_MZdsGXa0RWecaACremA01Z7jo-YpoEF1H6PyUF8PZzXkV10OYwSP3UMJDeTg=s88-c-k-c0x00ffffff-no-rj",
                            "width": 88
                        },
                        {
                            "height": 176,
                            "url": "https://yt3.ggpht.com/oQ2NQMuq-9IS6_MZdsGXa0RWecaACremA01Z7jo-YpoEF1H6PyUF8PZzXkV10OYwSP3UMJDeTg=s176-c-k-c0x00ffffff-no-rj",
                            "width": 176
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "channelId": "UC-CSyyi47VX1lD9zyeABW3w",
                    "isChannelOwner": true,
                    "title": "Dhruv Rathee"
                },
                "commentId": "UgzONHdKXQ3reCSU5mt4AaABAg",
                "content": "JOIN MY COURSE\n✏ Learn how to manage time and maximize producitivty in my specialised online course. Join here: https://academy.dhruvrathee.com\nUse code GET20 for a straight up 20% discount!",
                "creatorHeart": false,
                "cursorReplies": "Eg0SC2lkMDBSLTNPbUowGAYygwEaUBIaVWd6T05IZEtYUTNyZUNTVTVtdDRBYUFCQWciAggAKhhVQy1DU3l5aTQ3VlgxbEQ5enllQUJXM3cyC2lkMDBSLTNPbUowQAFICoIBAggBQi9jb21tZW50LXJlcGxpZXMtaXRlbS1VZ3pPTkhkS1hRM3JlQ1NVNW10NEFhQUJBZw%3D%3D",
                "paid": {
                    "amount": null,
                    "status": false
                },
                "pinned": {
                    "status": true,
                    "text": "Pinned by Dhruv Rathee"
                },
                "publishedTimeText": "3 weeks ago",
                "stats": {
                    "replies": 7,
                    "votes": 55
                }
            },
            {
                "author": {
                    "avatar": [
                        {
                            "height": 48,
                            "url": "https://yt3.ggpht.com/ytc/AGIKgqN6PWoYO6Gg9QkFPuhoihY4ToXPXxhBhJDzQkYmtg=s48-c-k-c0x00ffffff-no-rj",
                            "width": 48
                        },
                        {
                            "height": 88,
                            "url": "https://yt3.ggpht.com/ytc/AGIKgqN6PWoYO6Gg9QkFPuhoihY4ToXPXxhBhJDzQkYmtg=s88-c-k-c0x00ffffff-no-rj",
                            "width": 88
                        },
                        {
                            "height": 176,
                            "url": "https://yt3.ggpht.com/ytc/AGIKgqN6PWoYO6Gg9QkFPuhoihY4ToXPXxhBhJDzQkYmtg=s176-c-k-c0x00ffffff-no-rj",
                            "width": 176
                        }
                    ],
                    "badges": [],
                    "channelId": "UCh1QrUQTfI_Z0PVQGlKH7Og",
                    "isChannelOwner": false,
                    "title": "Aman Dubey"
                },
                "commentId": "Ugw6aAOMMDJehuP3PgJ4AaABAg",
                "content": "This Titanic story is the perfect example of-- confidence is good but overconfidence is harmful",
                "creatorHeart": false,
                "cursorReplies": "Eg0SC2lkMDBSLTNPbUowGAYygwEaUBIaVWd3NmFBT01NREplaHVQM1BnSjRBYUFCQWciAggAKhhVQy1DU3l5aTQ3VlgxbEQ5enllQUJXM3cyC2lkMDBSLTNPbUowQAFICoIBAggBQi9jb21tZW50LXJlcGxpZXMtaXRlbS1VZ3c2YUFPTU1ESmVodVAzUGdKNEFhQUJBZw%3D%3D",
                "paid": {
                    "amount": null,
                    "status": false
                },
                "pinned": {
                    "status": false,
                    "text": null
                },
                "publishedTimeText": "1 year ago",
                "stats": {
                    "replies": 102,
                    "votes": 9178
                }
            },
            {
                "author": {
                    "avatar": [
                        {
                            "height": 48,
                            "url": "https://yt3.ggpht.com/ytc/AGIKgqNy4XYBQ7874fNSI4q9AOZwpjzHoSF_zNo6EHJnIw=s48-c-k-c0x00ffffff-no-rj",
                            "width": 48
                        },
                        {
                            "height": 88,
                            "url": "https://yt3.ggpht.com/ytc/AGIKgqNy4XYBQ7874fNSI4q9AOZwpjzHoSF_zNo6EHJnIw=s88-c-k-c0x00ffffff-no-rj",
                            "width": 88
                        },
                        {
                            "height": 176,
                            "url": "https://yt3.ggpht.com/ytc/AGIKgqNy4XYBQ7874fNSI4q9AOZwpjzHoSF_zNo6EHJnIw=s176-c-k-c0x00ffffff-no-rj",
                            "width": 176
                        }
                    ],
                    "badges": [],
                    "channelId": "UCCGF5VCCO5x2nkD3i_-WAag",
                    "isChannelOwner": false,
                    "title": "The_Legendary_Mariner"
                },
                "commentId": "UgxKgdjvNCeGILn8kvx4AaABAg",
                "content": "It has been 110 years but none of us can forget this tragic incident !! Rest In Peace for all those who lost their lives 😞!",
                "creatorHeart": false,
                "cursorReplies": "Eg0SC2lkMDBSLTNPbUowGAYygwEaUBIaVWd4S2dkanZOQ2VHSUxuOGt2eDRBYUFCQWciAggAKhhVQy1DU3l5aTQ3VlgxbEQ5enllQUJXM3cyC2lkMDBSLTNPbUowQAFICoIBAggBQi9jb21tZW50LXJlcGxpZXMtaXRlbS1VZ3hLZ2Rqdk5DZUdJTG44a3Z4NEFhQUJBZw%3D%3D",
                "paid": {
                    "amount": null,
                    "status": false
                },
                "pinned": {
                    "status": false,
                    "text": null
                },
                "publishedTimeText": "10 months ago",
                "stats": {
                    "replies": 23,
                    "votes": 2101
                }
            },
            {
                "author": {
                    "avatar": [
                        {
                            "height": 48,
                            "url": "https://yt3.ggpht.com/4YNVNawlf7lSuuHxSkrEQ1PE0cdiUWDftx87f48oupqwEdNUXVNRHNNXshmeoS7nXqVgCoII5w=s48-c-k-c0x00ffffff-no-rj",
                            "width": 48
                        },
                        {
                            "height": 88,
                            "url": "https://yt3.ggpht.com/4YNVNawlf7lSuuHxSkrEQ1PE0cdiUWDftx87f48oupqwEdNUXVNRHNNXshmeoS7nXqVgCoII5w=s88-c-k-c0x00ffffff-no-rj",
                            "width": 88
                        },
                        {
                            "height": 176,
                            "url": "https://yt3.ggpht.com/4YNVNawlf7lSuuHxSkrEQ1PE0cdiUWDftx87f48oupqwEdNUXVNRHNNXshmeoS7nXqVgCoII5w=s176-c-k-c0x00ffffff-no-rj",
                            "width": 176
                        }
                    ],
                    "badges": [],
                    "channelId": "UCV-TIQKqmINN0RUscmmkuwQ",
                    "isChannelOwner": false,
                    "title": "Anum Qureshy "
                },
                "commentId": "UgzrMxxxYhDJ6wRBoaJ4AaABAg",
                "content": "Moral : Overconfidence can kill you and others as well. Thanks for the great info Dhruv Bhaiyya.",
                "creatorHeart": false,
                "cursorReplies": "Eg0SC2lkMDBSLTNPbUowGAYygwEaUBIaVWd6ck14eHhZaERKNndSQm9hSjRBYUFCQWciAggAKhhVQy1DU3l5aTQ3VlgxbEQ5enllQUJXM3cyC2lkMDBSLTNPbUowQAFICoIBAggBQi9jb21tZW50LXJlcGxpZXMtaXRlbS1VZ3pyTXh4eFloREo2d1JCb2FKNEFhQUJBZw%3D%3D",
                "paid": {
                    "amount": null,
                    "status": false
                },
                "pinned": {
                    "status": false,
                    "text": null
                },
                "publishedTimeText": "1 year ago",
                "stats": {
                    "replies": 9,
                    "votes": 810
                }
            },
            {
                "author": {
                    "avatar": [
                        {
                            "height": 48,
                            "url": "https://yt3.ggpht.com/ytc/AGIKgqNtx26HVtYexxRVtisrWv26SO0FpvBsvRZ8JShrtbNO6341yCpm7NhcOXLmsZGH=s48-c-k-c0x00ffffff-no-rj",
                            "width": 48
                        },
                        {
                            "height": 88,
                            "url": "https://yt3.ggpht.com/ytc/AGIKgqNtx26HVtYexxRVtisrWv26SO0FpvBsvRZ8JShrtbNO6341yCpm7NhcOXLmsZGH=s88-c-k-c0x00ffffff-no-rj",
                            "width": 88
                        },
                        {
                            "height": 176,
                            "url": "https://yt3.ggpht.com/ytc/AGIKgqNtx26HVtYexxRVtisrWv26SO0FpvBsvRZ8JShrtbNO6341yCpm7NhcOXLmsZGH=s176-c-k-c0x00ffffff-no-rj",
                            "width": 176
                        }
                    ],
                    "badges": [],
                    "channelId": "UCHSmouO2abIbw3svXcNZabA",
                    "isChannelOwner": false,
                    "title": "Jannatul Ferdous Bristy"
                },
                "commentId": "Ugx_mwdHKfGvYYCEUBh4AaABAg",
                "content": "Moral of the story is: Don't challenge the Almighty. The Almighty knows everything and the Almighty can do everything",
                "creatorHeart": false,
                "cursorReplies": "Eg0SC2lkMDBSLTNPbUowGAYygwEaUBIaVWd4X213ZEhLZkd2WVlDRVVCaDRBYUFCQWciAggAKhhVQy1DU3l5aTQ3VlgxbEQ5enllQUJXM3cyC2lkMDBSLTNPbUowQAFICoIBAggBQi9jb21tZW50LXJlcGxpZXMtaXRlbS1VZ3hfbXdkSEtmR3ZZWUNFVUJoNEFhQUJBZw%3D%3D",
                "paid": {
                    "amount": null,
                    "status": false
                },
                "pinned": {
                    "status": false,
                    "text": null
                },
                "publishedTimeText": "5 months ago",
                "stats": {
                    "replies": 28,
                    "votes": 984
                }
            },
            {
                "author": {
                    "avatar": [
                        {
                            "height": 48,
                            "url": "https://yt3.ggpht.com/ytc/AGIKgqOmuCDfWDuGZWcId3aEaV-HX_WJaU2OfkrwBKlkQak=s48-c-k-c0x00ffffff-no-rj",
                            "width": 48
                        },
                        {
                            "height": 88,
                            "url": "https://yt3.ggpht.com/ytc/AGIKgqOmuCDfWDuGZWcId3aEaV-HX_WJaU2OfkrwBKlkQak=s88-c-k-c0x00ffffff-no-rj",
                            "width": 88
                        },
                        {
                            "height": 176,
                            "url": "https://yt3.ggpht.com/ytc/AGIKgqOmuCDfWDuGZWcId3aEaV-HX_WJaU2OfkrwBKlkQak=s176-c-k-c0x00ffffff-no-rj",
                            "width": 176
                        }
                    ],
                    "badges": [],
                    "channelId": "UCmte-Qw7011plKwnFPRvFCQ",
                    "isChannelOwner": false,
                    "title": "Sirajul Hasan"
                },
                "commentId": "UgyLWgsCkXOQ32hoRYJ4AaABAg",
                "content": "There were three ships which were nearby when the Titanic sunk.\n \nOne of them was known as the *Sampson*. It was 7 miles away from the Titanic and they saw the white flares signaling danger, but because the crew had been hunting seals illegally and didn't want to be caught, they turned and went the opposite direction away from the Titanic. This ship represents us and people like us if we are so busy looking inward at our own sin and lives that we can't recognize when someone else is in need.\n\nThe next ship was the *Californian*. This ship was only 14 miles away from the Titanic, but they were surrounded by ice fields and the captain looked out and saw the white flares, but because the conditions weren't favorable and it was dark, he decided to go back to bed and wait until morning. The crew tried to convince themselves that nothing was happening. This ship represents those of us who say I can't do anything now. The conditions aren't right for it and so we wait until conditions are perfect before going out.\n\nThe last ship was the *Carpathia*. This ship was actually headed in a southern direction 58 miles away from the Titanic when they heard the distress cries over the radio. The captain of this ship knelt down, prayed to God for direction and then turned the ship around and went full steam ahead through the ice fields. This was the ship that saved the 705 survivors of the Titanic.\n\n 🌎 🌍 🌏\n\n🎀 ANALOGY -\n\nObstacles and reasons to avoid responsibility shall always be there, but those who accept it always find a place in the hearts to be remembered for the world of good they do.\n\n*I really wish that we all could be Carpathians in life, unlike more Sampsons and Californians... and this world could be a more beautiful place to live in.",
                "creatorHeart": false,
                "cursorReplies": "Eg0SC2lkMDBSLTNPbUowGAYygwEaUBIaVWd5TFdnc0NrWE9RMzJob1JZSjRBYUFCQWciAggAKhhVQy1DU3l5aTQ3VlgxbEQ5enllQUJXM3cyC2lkMDBSLTNPbUowQAFICoIBAggBQi9jb21tZW50LXJlcGxpZXMtaXRlbS1VZ3lMV2dzQ2tYT1EzMmhvUllKNEFhQUJBZw%3D%3D",
                "paid": {
                    "amount": null,
                    "status": false
                },
                "pinned": {
                    "status": false,
                    "text": null
                },
                "publishedTimeText": "11 months ago",
                "stats": {
                    "replies": 78,
                    "votes": 3059
                }
            },
            {
                "author": {
                    "avatar": [
                        {
                            "height": 48,
                            "url": "https://yt3.ggpht.com/yuTTdLyjgrqQoLWZBloSbfKJHFwkCtGzIDfv_CUbycFLhJaNkrSzYyRa0BKEclxvzybNa7L9FA=s48-c-k-c0x00ffffff-no-rj",
                            "width": 48
                        },
                        {
                            "height": 88,
                            "url": "https://yt3.ggpht.com/yuTTdLyjgrqQoLWZBloSbfKJHFwkCtGzIDfv_CUbycFLhJaNkrSzYyRa0BKEclxvzybNa7L9FA=s88-c-k-c0x00ffffff-no-rj",
                            "width": 88
                        },
                        {
                            "height": 176,
                            "url": "https://yt3.ggpht.com/yuTTdLyjgrqQoLWZBloSbfKJHFwkCtGzIDfv_CUbycFLhJaNkrSzYyRa0BKEclxvzybNa7L9FA=s176-c-k-c0x00ffffff-no-rj",
                            "width": 176
                        }
                    ],
                    "badges": [],
                    "channelId": "UC0Usz5iwEVQ8GwL07t7IlEg",
                    "isChannelOwner": false,
                    "title": "Vipul Bhargava"
                },
                "commentId": "UgwqYvcjgr7bENxZ1Ud4AaABAg",
                "content": "The ship's designer Thomas Andrews actually suggested 48 lifeboats instead of 20 but Bruce Ismay (chairman of White Star line) rejected it on the ground that it would've ruined the deck's view of the ship. Andrews further suggested that the water tight compartments should be higher (up to B-deck) but they reduced their height (up to E-deck) to create more space for the first class passengers. \nAlso, Fredrick Fleet and Lee (spotter at the crow's nest) didn't have binoculars despite requesting multiple times they couldn't get them because they were left locked in a cabin inside the ship itself and the keys were left with the another staff member, Fleet in an interview stated that if they had binoculars that night they would've spotted the iceberg soon enough to prevent the tragedy. In 1965, Fredrick Fleet committed suicide by hanging himself as he was depressed from the tragic event.",
                "creatorHeart": false,
                "cursorReplies": "Eg0SC2lkMDBSLTNPbUowGAYygwEaUBIaVWd3cVl2Y2pncjdiRU54WjFVZDRBYUFCQWciAggAKhhVQy1DU3l5aTQ3VlgxbEQ5enllQUJXM3cyC2lkMDBSLTNPbUowQAFICoIBAggBQi9jb21tZW50LXJlcGxpZXMtaXRlbS1VZ3dxWXZjamdyN2JFTnhaMVVkNEFhQUJBZw%3D%3D",
                "paid": {
                    "amount": null,
                    "status": false
                },
                "pinned": {
                    "status": false,
                    "text": null
                },
                "publishedTimeText": "2 months ago",
                "stats": {
                    "replies": 2,
                    "votes": 43
                }
            },
            {
                "author": {
                    "avatar": [
                        {
                            "height": 48,
                            "url": "https://yt3.ggpht.com/ytc/AGIKgqOS4MAjyVpSGKxciXuEgPyv2MWqVSZzUGcy1IDGwQ=s48-c-k-c0x00ffffff-no-rj",
                            "width": 48
                        },
                        {
                            "height": 88,
                            "url": "https://yt3.ggpht.com/ytc/AGIKgqOS4MAjyVpSGKxciXuEgPyv2MWqVSZzUGcy1IDGwQ=s88-c-k-c0x00ffffff-no-rj",
                            "width": 88
                        },
                        {
                            "height": 176,
                            "url": "https://yt3.ggpht.com/ytc/AGIKgqOS4MAjyVpSGKxciXuEgPyv2MWqVSZzUGcy1IDGwQ=s176-c-k-c0x00ffffff-no-rj",
                            "width": 176
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "CHECK"
                        }
                    ],
                    "channelId": "UCOepVQ3_q5GSTVQPsWlOsiQ",
                    "isChannelOwner": false,
                    "title": "Bolo Wajahat"
                },
                "commentId": "UgyzcHM00eRJuhDFPWF4AaABAg",
                "content": "i love these video series which are not related to politics and are exceptionally full of knowledge",
                "creatorHeart": false,
                "cursorReplies": "Eg0SC2lkMDBSLTNPbUowGAYygwEaUBIaVWd5emNITTAwZVJKdWhERlBXRjRBYUFCQWciAggAKhhVQy1DU3l5aTQ3VlgxbEQ5enllQUJXM3cyC2lkMDBSLTNPbUowQAFICoIBAggBQi9jb21tZW50LXJlcGxpZXMtaXRlbS1VZ3l6Y0hNMDBlUkp1aERGUFdGNEFhQUJBZw%3D%3D",
                "paid": {
                    "amount": null,
                    "status": false
                },
                "pinned": {
                    "status": false,
                    "text": null
                },
                "publishedTimeText": "1 year ago",
                "stats": {
                    "replies": 54,
                    "votes": 3931
                }
            },
            {
                "author": {
                    "avatar": [
                        {
                            "height": 48,
                            "url": "https://yt3.ggpht.com/ytc/AGIKgqMm7omvu_YHIr1srEexr8LZFsMtzFK9ls32rPCe=s48-c-k-c0x00ffffff-no-rj",
                            "width": 48
                        },
                        {
                            "height": 88,
                            "url": "https://yt3.ggpht.com/ytc/AGIKgqMm7omvu_YHIr1srEexr8LZFsMtzFK9ls32rPCe=s88-c-k-c0x00ffffff-no-rj",
                            "width": 88
                        },
                        {
                            "height": 176,
                            "url": "https://yt3.ggpht.com/ytc/AGIKgqMm7omvu_YHIr1srEexr8LZFsMtzFK9ls32rPCe=s176-c-k-c0x00ffffff-no-rj",
                            "width": 176
                        }
                    ],
                    "badges": [],
                    "channelId": "UCLIz3f2qWuwE6ZKiiGgKWGw",
                    "isChannelOwner": false,
                    "title": "Suman Dhondalay"
                },
                "commentId": "UgyUIXji6U0mwOCtZJ14AaABAg",
                "content": "You’ve a impeccable way of telling all these theories in form of stories which keeps the viewers glued to the videos till the end. Always learning new things from your videos. Thanks to you and your team who put in so much time and effort to make these videos so interesting and breaking down such complex theories into simple ones. Kudos to you guys 👏🏻",
                "creatorHeart": true,
                "cursorReplies": "Eg0SC2lkMDBSLTNPbUowGAYygwEaUBIaVWd5VUlYamk2VTBtd09DdFpKMTRBYUFCQWciAggAKhhVQy1DU3l5aTQ3VlgxbEQ5enllQUJXM3cyC2lkMDBSLTNPbUowQAFICoIBAggBQi9jb21tZW50LXJlcGxpZXMtaXRlbS1VZ3lVSVhqaTZVMG13T0N0WkoxNEFhQUJBZw%3D%3D",
                "paid": {
                    "amount": null,
                    "status": false
                },
                "pinned": {
                    "status": false,
                    "text": null
                },
                "publishedTimeText": "1 year ago",
                "stats": {
                    "replies": 2,
                    "votes": 652
                }
            },
            {
                "author": {
                    "avatar": [
                        {
                            "height": 48,
                            "url": "https://yt3.ggpht.com/ytc/AGIKgqNUZv1dcmnShvkTUSGyypBe_EU8KBnpJFNVCc5R0Bk=s48-c-k-c0x00ffffff-no-rj",
                            "width": 48
                        },
                        {
                            "height": 88,
                            "url": "https://yt3.ggpht.com/ytc/AGIKgqNUZv1dcmnShvkTUSGyypBe_EU8KBnpJFNVCc5R0Bk=s88-c-k-c0x00ffffff-no-rj",
                            "width": 88
                        },
                        {
                            "height": 176,
                            "url": "https://yt3.ggpht.com/ytc/AGIKgqNUZv1dcmnShvkTUSGyypBe_EU8KBnpJFNVCc5R0Bk=s176-c-k-c0x00ffffff-no-rj",
                            "width": 176
                        }
                    ],
                    "badges": [],
                    "channelId": "UCXY47cqhKvrnDz4R4U6VDsQ",
                    "isChannelOwner": false,
                    "title": "DINESH GADA"
                },
                "commentId": "Ugy4P4lYw80F3RUJRM54AaABAg",
                "content": "Can we all just appreciate the content this man and his crew make's it's just a masterpiece imagine what's he's gonna be doing in the future",
                "creatorHeart": false,
                "cursorReplies": "Eg0SC2lkMDBSLTNPbUowGAYygwEaUBIaVWd5NFA0bFl3ODBGM1JVSlJNNTRBYUFCQWciAggAKhhVQy1DU3l5aTQ3VlgxbEQ5enllQUJXM3cyC2lkMDBSLTNPbUowQAFICoIBAggBQi9jb21tZW50LXJlcGxpZXMtaXRlbS1VZ3k0UDRsWXc4MEYzUlVKUk01NEFhQUJBZw%3D%3D",
                "paid": {
                    "amount": null,
                    "status": false
                },
                "pinned": {
                    "status": false,
                    "text": null
                },
                "publishedTimeText": "10 months ago",
                "stats": {
                    "replies": 7,
                    "votes": 268
                }
            },
            {
                "author": {
                    "avatar": [
                        {
                            "height": 48,
                            "url": "https://yt3.ggpht.com/YMyNCL53jDrd9LSFczoCc-tWjFBTStlj8NZjGhrWl__n5VYPI2df5FiGTxVmpDaKgnyMa5MVpg=s48-c-k-c0x00ffffff-no-rj",
                            "width": 48
                        },
                        {
                            "height": 88,
                            "url": "https://yt3.ggpht.com/YMyNCL53jDrd9LSFczoCc-tWjFBTStlj8NZjGhrWl__n5VYPI2df5FiGTxVmpDaKgnyMa5MVpg=s88-c-k-c0x00ffffff-no-rj",
                            "width": 88
                        },
                        {
                            "height": 176,
                            "url": "https://yt3.ggpht.com/YMyNCL53jDrd9LSFczoCc-tWjFBTStlj8NZjGhrWl__n5VYPI2df5FiGTxVmpDaKgnyMa5MVpg=s176-c-k-c0x00ffffff-no-rj",
                            "width": 176
                        }
                    ],
                    "badges": [],
                    "channelId": "UCSpJGIrjEvzpgNK_KEpxhxQ",
                    "isChannelOwner": false,
                    "title": "Rimjhim"
                },
                "commentId": "UgzvkqCGG7b0zYhS82p4AaABAg",
                "content": "I don't know why a ship makes me so emotional.\nIt's disappearing makes moree... 🥺\nThank you so much to this men who made a very informative video.❤️",
                "creatorHeart": false,
                "cursorReplies": null,
                "paid": {
                    "amount": null,
                    "status": false
                },
                "pinned": {
                    "status": false,
                    "text": null
                },
                "publishedTimeText": "1 month ago",
                "stats": {
                    "replies": 0,
                    "votes": 31
                }
            },
            {
                "author": {
                    "avatar": [
                        {
                            "height": 48,
                            "url": "https://yt3.ggpht.com/lrqKm05luZR-235DWUyf4WM2TUJAaCB71appOh9N0-D4P8Qvrm1roraQgVNx355-XAPfNTZwp-4=s48-c-k-c0x00ffffff-no-rj",
                            "width": 48
                        },
                        {
                            "height": 88,
                            "url": "https://yt3.ggpht.com/lrqKm05luZR-235DWUyf4WM2TUJAaCB71appOh9N0-D4P8Qvrm1roraQgVNx355-XAPfNTZwp-4=s88-c-k-c0x00ffffff-no-rj",
                            "width": 88
                        },
                        {
                            "height": 176,
                            "url": "https://yt3.ggpht.com/lrqKm05luZR-235DWUyf4WM2TUJAaCB71appOh9N0-D4P8Qvrm1roraQgVNx355-XAPfNTZwp-4=s176-c-k-c0x00ffffff-no-rj",
                            "width": 176
                        }
                    ],
                    "badges": [],
                    "channelId": "UCjckXZ3xzWPXu1_VIPBH5dA",
                    "isChannelOwner": false,
                    "title": "The Muffin Man"
                },
                "commentId": "UgxZmMrH6_glkZzMQCd4AaABAg",
                "content": "'''' I respect everyone who were involved in this , Seriously the best piece that I've ever seen on YouTube . HATS OFF TO YOU ALL ! LOVE YOUR VIDEO ❤️",
                "creatorHeart": false,
                "cursorReplies": null,
                "paid": {
                    "amount": null,
                    "status": false
                },
                "pinned": {
                    "status": false,
                    "text": null
                },
                "publishedTimeText": "11 months ago",
                "stats": {
                    "replies": 0,
                    "votes": 31
                }
            },
            {
                "author": {
                    "avatar": [
                        {
                            "height": 48,
                            "url": "https://yt3.ggpht.com/lbXNRQ5BCOoX8p64ojn_F-TNk8ICgrCkGvWUhrMbwu7_8jZTgBAXiTG2RgmrDbMWjoXDywIa7g=s48-c-k-c0x00ffffff-no-rj",
                            "width": 48
                        },
                        {
                            "height": 88,
                            "url": "https://yt3.ggpht.com/lbXNRQ5BCOoX8p64ojn_F-TNk8ICgrCkGvWUhrMbwu7_8jZTgBAXiTG2RgmrDbMWjoXDywIa7g=s88-c-k-c0x00ffffff-no-rj",
                            "width": 88
                        },
                        {
                            "height": 176,
                            "url": "https://yt3.ggpht.com/lbXNRQ5BCOoX8p64ojn_F-TNk8ICgrCkGvWUhrMbwu7_8jZTgBAXiTG2RgmrDbMWjoXDywIa7g=s176-c-k-c0x00ffffff-no-rj",
                            "width": 176
                        }
                    ],
                    "badges": [],
                    "channelId": "UC3fzTmTs0C9o7U2_X19CDsQ",
                    "isChannelOwner": false,
                    "title": "Daylight!!!"
                },
                "commentId": "Ugx5hDTs8Drbxz9WFnh4AaABAg",
                "content": "Love your videos sir. You missed one thing, experts believe that unlike the rivets of most ship that are made from steel, the rivets in the body of titanic were actually made up of caste iron. Which is why instead of just damaging the front of the bow, water entered the actual compartments inside.",
                "creatorHeart": false,
                "cursorReplies": null,
                "paid": {
                    "amount": null,
                    "status": false
                },
                "pinned": {
                    "status": false,
                    "text": null
                },
                "publishedTimeText": "4 months ago (edited)",
                "stats": {
                    "replies": 0,
                    "votes": 11
                }
            },
            {
                "author": {
                    "avatar": [
                        {
                            "height": 48,
                            "url": "https://yt3.ggpht.com/ytc/AGIKgqNlQZwmJvqJxa60mhaGrLpi2srzTaVaqSFPnFf8=s48-c-k-c0x00ffffff-no-rj",
                            "width": 48
                        },
                        {
                            "height": 88,
                            "url": "https://yt3.ggpht.com/ytc/AGIKgqNlQZwmJvqJxa60mhaGrLpi2srzTaVaqSFPnFf8=s88-c-k-c0x00ffffff-no-rj",
                            "width": 88
                        },
                        {
                            "height": 176,
                            "url": "https://yt3.ggpht.com/ytc/AGIKgqNlQZwmJvqJxa60mhaGrLpi2srzTaVaqSFPnFf8=s176-c-k-c0x00ffffff-no-rj",
                            "width": 176
                        }
                    ],
                    "badges": [],
                    "channelId": "UCx1Xt2t2ofLkIv2ccJz6yZQ",
                    "isChannelOwner": false,
                    "title": "Light Yagami"
                },
                "commentId": "Ugw_55hw8vA-rLiMOMd4AaABAg",
                "content": "“ Even God himself cannot sink this ship ”\n\n God : And I took that personally",
                "creatorHeart": false,
                "cursorReplies": "Eg0SC2lkMDBSLTNPbUowGAYygwEaUBIaVWd3XzU1aHc4dkEtckxpTU9NZDRBYUFCQWciAggAKhhVQy1DU3l5aTQ3VlgxbEQ5enllQUJXM3cyC2lkMDBSLTNPbUowQAFICoIBAggBQi9jb21tZW50LXJlcGxpZXMtaXRlbS1VZ3dfNTVodzh2QS1yTGlNT01kNEFhQUJBZw%3D%3D",
                "paid": {
                    "amount": null,
                    "status": false
                },
                "pinned": {
                    "status": false,
                    "text": null
                },
                "publishedTimeText": "1 year ago",
                "stats": {
                    "replies": 77,
                    "votes": 3435
                }
            },
            {
                "author": {
                    "avatar": [
                        {
                            "height": 48,
                            "url": "https://yt3.ggpht.com/ytc/AGIKgqOUcsZ6sH_oG_rZIN8NErLnCAWZm0GImmAkEUc4_g=s48-c-k-c0x00ffffff-no-rj",
                            "width": 48
                        },
                        {
                            "height": 88,
                            "url": "https://yt3.ggpht.com/ytc/AGIKgqOUcsZ6sH_oG_rZIN8NErLnCAWZm0GImmAkEUc4_g=s88-c-k-c0x00ffffff-no-rj",
                            "width": 88
                        },
                        {
                            "height": 176,
                            "url": "https://yt3.ggpht.com/ytc/AGIKgqOUcsZ6sH_oG_rZIN8NErLnCAWZm0GImmAkEUc4_g=s176-c-k-c0x00ffffff-no-rj",
                            "width": 176
                        }
                    ],
                    "badges": [],
                    "channelId": "UC71mKSdPfJGrafD0n1XT0vg",
                    "isChannelOwner": false,
                    "title": "Sam"
                },
                "commentId": "UgwF2smNHpgSypCRx3p4AaABAg",
                "content": "Hi Dhruv, I have watched your videos religiously for a long time and I love the way you simplify everything. I would really love it if you could make a video on the research process and how you break down your video in step-by-step storytelling. This will really help since my job is talking to a lot of clients and I am still learning effectively explaining something to someone.",
                "creatorHeart": false,
                "cursorReplies": "Eg0SC2lkMDBSLTNPbUowGAYygwEaUBIaVWd3RjJzbU5IcGdTeXBDUngzcDRBYUFCQWciAggAKhhVQy1DU3l5aTQ3VlgxbEQ5enllQUJXM3cyC2lkMDBSLTNPbUowQAFICoIBAggBQi9jb21tZW50LXJlcGxpZXMtaXRlbS1VZ3dGMnNtTkhwZ1N5cENSeDNwNEFhQUJBZw%3D%3D",
                "paid": {
                    "amount": null,
                    "status": false
                },
                "pinned": {
                    "status": false,
                    "text": null
                },
                "publishedTimeText": "1 year ago",
                "stats": {
                    "replies": 1,
                    "votes": 21
                }
            },
            {
                "author": {
                    "avatar": [
                        {
                            "height": 48,
                            "url": "https://yt3.ggpht.com/G5Y4vFci7-SAVcqsxMnCtJAUJJN7dOkpWg5dZZ0pl2tz6DDfxEXkBsRhaZkZC0H53gm4bjq8mRA=s48-c-k-c0x00ffffff-no-rj",
                            "width": 48
                        },
                        {
                            "height": 88,
                            "url": "https://yt3.ggpht.com/G5Y4vFci7-SAVcqsxMnCtJAUJJN7dOkpWg5dZZ0pl2tz6DDfxEXkBsRhaZkZC0H53gm4bjq8mRA=s88-c-k-c0x00ffffff-no-rj",
                            "width": 88
                        },
                        {
                            "height": 176,
                            "url": "https://yt3.ggpht.com/G5Y4vFci7-SAVcqsxMnCtJAUJJN7dOkpWg5dZZ0pl2tz6DDfxEXkBsRhaZkZC0H53gm4bjq8mRA=s176-c-k-c0x00ffffff-no-rj",
                            "width": 176
                        }
                    ],
                    "badges": [],
                    "channelId": "UCpHlL8AcRvWKfx9k_gYeF8w",
                    "isChannelOwner": false,
                    "title": "Galib Ramiz 2"
                },
                "commentId": "UgzK3JUySnCvziheQh54AaABAg",
                "content": "Thank you for helping me to think deeply about the subject. It was an experience that made me shudder at the thought. Imagine you are drowning in the North Atlantic Ocean,It's really scary. Survivors have really seen death up close.",
                "creatorHeart": false,
                "cursorReplies": null,
                "paid": {
                    "amount": null,
                    "status": false
                },
                "pinned": {
                    "status": false,
                    "text": null
                },
                "publishedTimeText": "1 year ago",
                "stats": {
                    "replies": 0,
                    "votes": 74
                }
            },
            {
                "author": {
                    "avatar": [
                        {
                            "height": 48,
                            "url": "https://yt3.ggpht.com/ytc/AGIKgqODwrTdCbEHir2f68hsjYFJE8XVucplyHNG0A=s48-c-k-c0x00ffffff-no-rj",
                            "width": 48
                        },
                        {
                            "height": 88,
                            "url": "https://yt3.ggpht.com/ytc/AGIKgqODwrTdCbEHir2f68hsjYFJE8XVucplyHNG0A=s88-c-k-c0x00ffffff-no-rj",
                            "width": 88
                        },
                        {
                            "height": 176,
                            "url": "https://yt3.ggpht.com/ytc/AGIKgqODwrTdCbEHir2f68hsjYFJE8XVucplyHNG0A=s176-c-k-c0x00ffffff-no-rj",
                            "width": 176
                        }
                    ],
                    "badges": [],
                    "channelId": "UCdNLs4_uB0iFyO88_QDqpUw",
                    "isChannelOwner": false,
                    "title": "Amit Jain"
                },
                "commentId": "UgxfmakBJ-6IduTpkip4AaABAg",
                "content": "Thank you very much Dhruv for making these videos, you make it so simple, informative, give every minute detail and love the way you explain, every video of yours helps us learn better , thanks a lot to you and your entire team, script, animation, details, etc ...for this. Lots of gratitude for these videos, kindly make more such videos that are informative .",
                "creatorHeart": false,
                "cursorReplies": null,
                "paid": {
                    "amount": null,
                    "status": false
                },
                "pinned": {
                    "status": false,
                    "text": null
                },
                "publishedTimeText": "6 months ago",
                "stats": {
                    "replies": 0,
                    "votes": 41
                }
            },
            {
                "author": {
                    "avatar": [
                        {
                            "height": 48,
                            "url": "https://yt3.ggpht.com/c6_o8PzNIqmD2Pb_4G3lvQChjol5_Kgp0e5-20CAIiy_Pv6VWU38OfmyQyaf_kBdUe_atUqwOg=s48-c-k-c0x00ffffff-no-rj",
                            "width": 48
                        },
                        {
                            "height": 88,
                            "url": "https://yt3.ggpht.com/c6_o8PzNIqmD2Pb_4G3lvQChjol5_Kgp0e5-20CAIiy_Pv6VWU38OfmyQyaf_kBdUe_atUqwOg=s88-c-k-c0x00ffffff-no-rj",
                            "width": 88
                        },
                        {
                            "height": 176,
                            "url": "https://yt3.ggpht.com/c6_o8PzNIqmD2Pb_4G3lvQChjol5_Kgp0e5-20CAIiy_Pv6VWU38OfmyQyaf_kBdUe_atUqwOg=s176-c-k-c0x00ffffff-no-rj",
                            "width": 176
                        }
                    ],
                    "badges": [],
                    "channelId": "UCDjhsMTCGvNT05Ikvpsks9A",
                    "isChannelOwner": false,
                    "title": "Apex Wolf"
                },
                "commentId": "UgxxC6KxqEF5NJmWap94AaABAg",
                "content": "Your way of story telling and explaination is amazing . Very less people have this type of speaking skills of explaining things ✨",
                "creatorHeart": false,
                "cursorReplies": "Eg0SC2lkMDBSLTNPbUowGAYygwEaUBIaVWd4eEM2S3hxRUY1TkptV2FwOTRBYUFCQWciAggAKhhVQy1DU3l5aTQ3VlgxbEQ5enllQUJXM3cyC2lkMDBSLTNPbUowQAFICoIBAggBQi9jb21tZW50LXJlcGxpZXMtaXRlbS1VZ3h4QzZLeHFFRjVOSm1XYXA5NEFhQUJBZw%3D%3D",
                "paid": {
                    "amount": null,
                    "status": false
                },
                "pinned": {
                    "status": false,
                    "text": null
                },
                "publishedTimeText": "1 year ago",
                "stats": {
                    "replies": 1,
                    "votes": 111
                }
            },
            {
                "author": {
                    "avatar": [
                        {
                            "height": 48,
                            "url": "https://yt3.ggpht.com/ytc/AGIKgqNocq2TUd7Vr6j2hl1AepL8v38AqYRbzmaP6sNRUg=s48-c-k-c0x00ffffff-no-rj",
                            "width": 48
                        },
                        {
                            "height": 88,
                            "url": "https://yt3.ggpht.com/ytc/AGIKgqNocq2TUd7Vr6j2hl1AepL8v38AqYRbzmaP6sNRUg=s88-c-k-c0x00ffffff-no-rj",
                            "width": 88
                        },
                        {
                            "height": 176,
                            "url": "https://yt3.ggpht.com/ytc/AGIKgqNocq2TUd7Vr6j2hl1AepL8v38AqYRbzmaP6sNRUg=s176-c-k-c0x00ffffff-no-rj",
                            "width": 176
                        }
                    ],
                    "badges": [],
                    "channelId": "UCLliTgGLx5l939ezhgLPUFg",
                    "isChannelOwner": false,
                    "title": "StatsLance"
                },
                "commentId": "Ugztr8u2KI50PAV07MN4AaABAg",
                "content": "There are few things which are to be noticed. Captain of SS Californian told his wireless operator to send warnings to titanic but operator of titanic ignored it and he probably was warned by few other ships around about ice bergs. The operators had huge workload so SS Californian's operator went to sleep after working for long hours & sending warnings. Also the rule around that time was to fly red colored rockets for distress signal but titanic did not have it and they flew white colored rockets with 1 minute interval. Stanley Lord assumed that was party happening but i think he could have been bit more proactive. We cannot totally blame him as he gave warnings but yeah if he could have take things more seriously then almost everyone could have been saved as it would have take hour or two max to reach at titanic from position they were in.",
                "creatorHeart": false,
                "cursorReplies": null,
                "paid": {
                    "amount": null,
                    "status": false
                },
                "pinned": {
                    "status": false,
                    "text": null
                },
                "publishedTimeText": "3 months ago",
                "stats": {
                    "replies": 0,
                    "votes": 13
                }
            },
            {
                "author": {
                    "avatar": [
                        {
                            "height": 48,
                            "url": "https://yt3.ggpht.com/ytc/AGIKgqOMP3tASc2l_H0FkkkGFJBLTlP2J8okM0TOTg=s48-c-k-c0x00ffffff-no-rj",
                            "width": 48
                        },
                        {
                            "height": 88,
                            "url": "https://yt3.ggpht.com/ytc/AGIKgqOMP3tASc2l_H0FkkkGFJBLTlP2J8okM0TOTg=s88-c-k-c0x00ffffff-no-rj",
                            "width": 88
                        },
                        {
                            "height": 176,
                            "url": "https://yt3.ggpht.com/ytc/AGIKgqOMP3tASc2l_H0FkkkGFJBLTlP2J8okM0TOTg=s176-c-k-c0x00ffffff-no-rj",
                            "width": 176
                        }
                    ],
                    "badges": [],
                    "channelId": "UC3HtGgCRSE1U_u8lWt5Qd-g",
                    "isChannelOwner": false,
                    "title": "Akash Boparai"
                },
                "commentId": "Ugxb7RSWO9efi8P-_a14AaABAg",
                "content": "Titanic was actually a masterpiece , the ship and the movie both.",
                "creatorHeart": false,
                "cursorReplies": "Eg0SC2lkMDBSLTNPbUowGAYygwEaUBIaVWd4YjdSU1dPOWVmaThQLV9hMTRBYUFCQWciAggAKhhVQy1DU3l5aTQ3VlgxbEQ5enllQUJXM3cyC2lkMDBSLTNPbUowQAFICoIBAggBQi9jb21tZW50LXJlcGxpZXMtaXRlbS1VZ3hiN1JTV085ZWZpOFAtX2ExNEFhQUJBZw%3D%3D",
                "paid": {
                    "amount": null,
                    "status": false
                },
                "pinned": {
                    "status": false,
                    "text": null
                },
                "publishedTimeText": "1 year ago",
                "stats": {
                    "replies": 35,
                    "votes": 1720
                }
            }
        ],
        "cursorNext": "Eg0SC2lkMDBSLTNPbUowGAYy7gIKxAJnZXRfcmFua2VkX3N0cmVhbXMtLUNxWUJDSUFFRlJlMzBUZ2Ftd0VLbGdFSTJGOFFnQVFZQnlLTEFkc1cyd2t4OS1la2REWkJkVXhwQXlTaHIyNC1fQUxPREI1dkdIa0RURE5qNVNBRXFfQVkxZ1ZUbUFnWDRfOEFjUXYybDZjeG0tYkIybldvSlpEb1ZBY3JQYlJJa3ZzR1dvbkE0RHFMMFJzOTUzS0VlcE10RUlJWVRIdFRkSWVmZ1JqSW1rNzlJaHRCaXpGT1N1Tk01OER5VXJBSTJKLUZoa3FHd1RNNzJGVWpFUGtOWk5QbWtlclFkRGtRRkJJRkNJWWdHQUFTQlFpSUlCZ0FFZ2NJbHlBUUR4Z0JFZ2NJaENBUUZCZ0JFZ2NJaHlBUUFSZ0FFZ1VJaVNBWUFCSUhDSVVnRUFjWUFSZ0EiESILaWQwMFItM09tSjAwAHgBKBRCEGNvbW1lbnRzLXNlY3Rpb24%3D",
        "filters": [
            {
                "cursorFilter": "Eg0SC2lkMDBSLTNPbUowGAYyJSIRIgtpZDAwUi0zT21KMDAAeAJCEGNvbW1lbnRzLXNlY3Rpb24%3D",
                "selected": true,
                "title": "Top comments"
            },
            {
                "cursorFilter": "Eg0SC2lkMDBSLTNPbUowGAYyJSIRIgtpZDAwUi0zT21KMDABeAJCEGNvbW1lbnRzLXNlY3Rpb24%3D",
                "selected": false,
                "title": "Newest first"
            }
        ],
        "totalCommentsCount": 7747
    }
    constructor() {
        super();
        this.state = {
            viDetails: this.video,
            channelData: this.channel,
            vcomments: this.com,
            link: "",
            chid: "",
            alert: false,
            chAlert: false,
            vloading: false,
            anlz: false,
            chloading: false,
            comLoading: false,
            showCom: false,
            error: false
        }
    }
    cross = async () => {
        this.setState({
            alert: false,
            error: false
        })
    }
    write = async (event) => {
        this.setState({
            link: event.target.value,
            alert: false,
            anlz: false,
            chid: ""
        })
    }
    analyze = async () => {
        var myHeaders = new Headers();
        myHeaders.append("apikey", "9Z51TRfOl9jEgIG60Uj3U3GLhMfu6xaN");

        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
            headers: myHeaders
        };

        this.setState({
            // alert: true,
            chAlert: false,
            vloading: true,
            showCom: false
        })

        // fetch(`https://api.apilayer.com/youtube/video/details?id=${this.state.link.substring(17, this.state.link.length)}`, requestOptions)
        //   .then(response => response.json())
        //   .then(result => {
        //      this.setState({
        //       chid : result.author.channelId
        //      })
        //   })
        //   .catch(error => console.log('error', error));
        // let api = this.state.link.substring(17, this.state.link.length)
        try {
            let data = await fetch(`https://api.apilayer.com/youtube/video/details?id=${this.state.link.substring(17, this.state.link.length)}`, requestOptions)
            let parsedData = await data.json();
            this.setState({
                viDetails: parsedData,
                chid: parsedData.author.channelId
            }, () => {
                this.setState({
                    alert: true,
                    vloading: false,
                    anlz: true
                })
            })

        }
        catch (exception) {
            this.setState({
                error: true,
                vloading: false,
            })
        }

        // let data = await fetch(`https://api.apilayer.com/youtube/video/details?id=${this.state.link.substring(17, this.state.link.length)}`, requestOptions)
        // let parsedData = await data.json();
        // this.setState({
        //     viDetails: parsedData,
        //     chid: parsedData.author.channelId
        // }, () => {
        //     this.setState({
        //         alert: true,
        //         vloading: false,
        //         anlz: true
        //     })
        // })

        //--------------------------------------
        //   .then(response => response.json())
        //   .then(result => console.log(result.title))
        //   .catch(error => console.log('error', error));
        // console.log(this.state.link.substring(17, this.state.link.length))
    }

    // download = async () => {
    //     const fs = require('fs')
    //     const youtubedl = require('youtube-dl') //need to npm i youtube_dl

    //     const video = youtubedl('http://www.youtube.com/watch?v=90AiXO1pAiA',
    //         // Optional arguments passed to youtube-dl.
    //         ['--format=18'],
    //     )

    //     // Will be called when the download starts.
    //     video.on('info', function (info) {
    //         console.log('Download started')
    //         console.log('filename: ' + info._filename)
    //         console.log('size: ' + info.size)
    //     })

    //     video.pipe(fs.createWriteStream('myvideo.mp4'))
    // }

    loadChannelDetails = async () => {

        var myHeaders = new Headers();
        myHeaders.append("apikey", "9Z51TRfOl9jEgIG60Uj3U3GLhMfu6xaN");

        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
            headers: myHeaders
        };

        // this.setState({ //remove this later
        //     chAlert: true
        // })

        this.setState({
            chloading: true
        })

        try {
            if (this.state.chid !== "") {
                let data2 = await fetch(`https://api.apilayer.com/youtube/channel/details?id=${this.state.chid}`, requestOptions)
                let parsedData2 = await data2.json();
                this.setState({
                    channelData: parsedData2,
                }, () => {
                    this.setState({
                        chAlert: true,
                        chloading: false
                    })
                })
            }
            else {
                this.setState({
                    error: true,
                    chloading: false,
                    chAlert: false
                })
            }
        }
        catch (exception) {
            this.setState({
                error: true,
                chloading: false,
                chAlert: false
            })
        }
    }

    loadvComments = async () => {

        var myHeaders = new Headers();
        myHeaders.append("apikey", "9Z51TRfOl9jEgIG60Uj3U3GLhMfu6xaN");

        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
            headers: myHeaders
        };

        this.setState({
            // showCom: true,
            comLoading:true
        })
        try {
            let data3 = await fetch(`https://api.apilayer.com/youtube/video/comments?id=${this.state.link.substring(17, this.state.link.length)}`, requestOptions)
            let parsedData3 = await data3.json();
            this.setState({
                vcomments: parsedData3,
            }, () => {
                this.setState({
                    showCom: true,
                    comLoading:false
                })
                if(this.state.vcomments.totalCommentsCount===null){
                    this.setState({
                        error: true,
                        comLoading: false,
                        showCom: false
                    })
                }
            })

        }
        catch (exception) {
            this.setState({
                error: true,
                comLoading: false,
                showCom: false
            })
        }




    }


    render() {
        return (
            <div>
                <div className="container text-center my-5">
                    <div className="row">
                        <div className="col">
                            <div className='d-flex'>
                                <input className="form-control me-2" placeholder="Paste video link here" id="vid" onChange={this.write} />
                                <button className={`${this.state.vloading ? "spinner-border" : "btn"} ${this.state.vloading ? "text-success" : "btn-outline-success"}`} onClick={this.analyze}>{this.state.vloading ? "" : this.state.anlz ? "DONE!!" : "Analyze"}</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mx-5'>
                    <Error crossbt={this.cross} errorOccured={this.state.error} />
                </div>
                <div className='mx-5'>
                    <Video len={this.state.viDetails.lengthSeconds} thmb={this.state.viDetails.thumbnails[0].url} cmts={this.state.viDetails.stats.comments} likes={this.state.viDetails.stats.likes} views={this.state.viDetails.stats.views} publ={this.state.viDetails.publishedDate} crossbt={this.cross} show={this.state.alert} name={this.state.viDetails.title} ctg={this.state.viDetails.category} descp={this.state.viDetails.description} />
                </div>
                <div className="container text-center">
                    <div className="row">
                        <div className="col">
                            <Channel load={this.state.chloading} contact={this.state.channelData.links} created={this.state.channelData.joinedDateText} chCountry={this.state.channelData.country} verif={(this.state.channelData.badges.length !== 0 && this.state.channelData.badges[0].text === "Verified") ? true : false} channelSubs={this.state.channelData.stats.subscribersText} channelVids={this.state.channelData.stats.videosText} channelViews={this.state.channelData.stats.views} showTitle={this.state.chAlert} channelDscp={this.state.channelData.description} channelTitle={this.state.channelData.title} loadChannelDetails={this.loadChannelDetails} />
                        </div>
                        <div className="col">
                            <Comments totalComments={this.state.vcomments.totalCommentsCount} load={this.state.comLoading} sc={this.state.showCom} cmts={this.state.vcomments.comments} loadComments={this.loadvComments} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
