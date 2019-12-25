<template>
    <div class="container">

        <br><br> <!-- Don't judge me, please spare me -->

        <div class="Title" style="margin-top: 30px;">
            <p>About TEDxCUHK</p>
            <div class="Para">
                <p>TEDxCUHK is an annual conference organized by the students of 
                    The Chinese University of Hong Kong (CUHK) who are passionate about
                    spreading remarkable ideas to people of the community.
                </p>

                <p>Keeping true to the spirit of 'Ideas worth sharing', each year we invite renowned speakers
                    from various backgrounds to come and share their stories and ideas, aiming to inspire
                    fellow schoolmates, members of CUHK and the community to better our future and our world.
                </p>

                <p>TEDxCUHK 2020 would not have been possible without the help of <router-link to="OurTeam">Our Team</router-link> and from 
                <router-link to="OurSponsor">Our Sponsors</router-link>. </p>
            </div>
        </div>

        <br>

        <div class="Title">
            <p>About TEDx</p>
            <div class="Para">
                <p>In the spirit of ideas worth spreading, TEDx is a program of local, 
                    self-organized events that bring people together to share a 
                    TED-like experience. At a TEDx event, TEDTalks video and live speakers 
                    combine to spark deep discussion and connection in a small group. 
                    These local, self-organized events are branded TEDx, 
                    where x=independently organized TED event. The TED Conference provides 
                    general guidance for the TEDx program, but individual TEDx events are 
                    self-organized.
                </p>

                <p>Find out more about TEDx at <a href="https://www.ted.com/tedx" target="_blank" rel="noreferrer">www.ted.com/tedx</a></p>
            </div>
        </div>

        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/N-l1xtCMnpw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        <br>

        <div class="Title">
            <p>About TED</p>
            <div class="Para">
                <p>TED is a nonprofit organization devoted to Ideas Worth Spreading. Started as a four-day conference 
                    in California 30 years ago, TED has grown to support its mission with multiple initiatives. 
                    The two annual TED Conferences invite the world's leading thinkers and doers to speak for 18 minutes or less. 
                    Many of these talks are then made available, free, at TED.com. TED speakers have included Bill Gates, Jane Goodall, 
                    Elizabeth Gilbert, Sir Richard Branson, Nandan Nilekani, Philippe Starck, Ngozi Okonjo-Iweala, Sal Khan and Daniel Kahneman.
                </p>

                <p>The annual TED Conference takes place each spring in Vancouver, British Columbia. TED's media initiatives include 
                    TED.com, where new TED Talks are posted daily; TED Translators, which provides subtitles and interactive transcripts 
                    as well as translations from volunteers worldwide; the educational initiative TED-Ed. TED has established The Audacious 
                    Project that takes a collaborative approach to funding ideas with the potential to create change at thrilling scale; TEDx, 
                    which supports individuals or groups in hosting local, self- organized TED-style events around the world, and the TED Fellows 
                    program, helping world-changing innovators from around the globe to amplify the impact of their remarkable projects and activities.
                </p>

                <p>Follow TED on Twitter at <a href="http://twitter.com/TEDTalks" target="_blank" rel="noreferrer">http://twitter.com/TEDTalks</a>, or on Facebook at <a href="http://www.facebook.com/TED" target="_blank" rel="noreferrer">http://www.facebook.com/TED.</a></p>

            </div>
        </div>

        <br><br>

        <webfooter/>
    </div>
</template>

<script>
import webfooter from './footer'
export default {
    components: {
        webfooter
    },
}
</script>

<style scoped>
* a {
    text-decoration: none;
}

* a:hover {
    color: #e62b1e;
}

iframe {
    margin: 0 0 0 55%;
    top: 46%;
    position: absolute;
    z-index: 0;
}
.container {
    color: #2b2b2b;
}
.Title {
    margin: 0 17% 0 17%;
    font-size: 28px;
}
.Para {
    margin: 0 60% 0 0;
    font-weight: 200;
    font-size: 15px;
}

</style>