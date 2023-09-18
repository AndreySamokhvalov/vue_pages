import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
 
export default new Vuex.Store({
    state:{
        blogs: [
            { id: '1', tag: 'kitchen', blogName: 'Let’s Get Solution for Building Construction Work', url: './img/main/kitchen.png', blogInfo: '26 December,2022', blogText: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable .Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary." },
            { id: '2', tag: 'bathroom', blogName: "Let's find a solution for the construction work in the building", url: './img/main/bath2.png', blogInfo: '26 December,2022', blogText: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable .Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary." }
        ],
        details:
                [
                    {
                        id: "1",
                        name: "Design sprints are great",
                        text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                        list: {
                            listItem1: "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                            listItem2: "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                            listItem3: "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered."
                        },
                        url: "./img/main/details1.png"
                    },
                    {
                        id: "2",
                        name: "Design sprints are the best",
                        text: "Know that you are suffering, sit still, absorbing aliquam from your life as much as possible.Contrary to popular belief.There are many variations of passages from Lorem Ipsum, but most of them have undergone changes in one form or another, by introducing humor or random words that look even a little implausible.The embarrassing text is hidden in the middle of the text. All Lorem Ipsum generators on the internet tend to repeat predefined fragments as needed.",
                        list: {
                            listItem1: "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                            listItem2: "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                            listItem3: "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered."
                        },
                        url: "./img/main/bath1.png"
                    },

                ],
                sliderData: [
                    {title: "Minimal Look Bedrooms", text1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.", text2: "In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.", url: "./img/main//min1.png"},
                    {title: "Minimal Look Bathroom", text1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.", text2: "In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.", url: "./img/main//bath_1.png"},
                ],
 
    },
    getters:{
        getKit: (state) => state.blogs.filter(item => item.tag === "kitchen"),
        getBath: (state) => state.blogs.filter(item => item.tag === "bathroom"),

    },
});