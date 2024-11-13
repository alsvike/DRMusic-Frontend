const app = Vue.createApp({
    data() {
        return {
            records: [], // Start with an empty array instead of mock data
        };
    },
    methods: {
        secondsToMinutes(seconds) {
            return Math.floor(seconds / 60) + ':' + String(seconds % 60).padStart(2, '0');
        },
        //ShowAll gets data from our API
        async showAll() {
            const response = await axios.get("https://drmusic.azurewebsites.net/api/musicrecord");
            this.records = response.data;
        },
        //Gets the inputted ID
        async showRecord(id) {
            const response = await axios.get(`https://drmusic.azurewebsites.net/api/musicrecord/${id}`);
            this.records = [response.data];
        },
        //Gets the artist(contains)
        async showArtist(artist) {
            const response = await axios.get(`https://drmusic.azurewebsites.net/api/musicrecord/?artist=${artist}`);
            this.records = response.data;
        },
        //Gets the genre(contains)
        async showGenre(genre) {
            const response = await axios.get(`https://drmusic.azurewebsites.net/api/musicrecord/?album=${genre}`);
            this.records = response.data;
        },
        //Gets the year
        async showPublicationYear(year) {
            const response = await axios.get(`https://drmusic.azurewebsites.net/api/musicrecord/?year=${publicationyear}`);
            this.records = response.data;
        },

        //Get All Ascending by publicyear
        async showAscYear(year) {
            const response = await axios.get(`https://drmusic.azurewebsites.net/api/musicrecord?orderby=publicationyear+asc`);
        this.records = response.data;
        },
        //Get All Descending by publicyear
        async showDscYear(year) {
            const response = await axios.get(`https://drmusic.azurewebsites.net/api/musicrecord?orderby=publicationyear+dsc`);
        this.records = response.data;
        },
        
    },
    // Add mounted() lifecycle hook to fetch data when component is mounted
    mounted() {
        this.showAll(); // Call showAll() when the component mounts
    }
}).mount('#app');