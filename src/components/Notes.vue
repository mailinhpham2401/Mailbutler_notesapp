<template>
  <div class="tc-notes-wrapper">
    <add-new-button @addNote="addNote" />
    <div class="tc-notes">
      <note
        v-for="(note, index) in notes"
        :note="note"
        :key="index"
        @deleteNote="deleteNote"
      />
    </div>
  </div>
</template>

<script>
//import axios from 'axios'
import AddNewButton from "./AddNewButton";
import Note from "./Note";
export default {
  name: "Notes",
  components: { Note, AddNewButton },
  data() {
    return {
      notes: [
        {
          title: "sun",
          text: "yellow",
        },
        {
          title: "moon",
          text: "white",
        },
        {
          title: "cloud",
          text: "floats",
				},
      ],
    };
  },
  methods: {
    addNote() {
			// axios.post('https://beta.mailbutler.io/api/v2/notes',this.notes.text)
			// .then(response =>{
			// 	console.log(response);
			// })
      this.notes.unshift({ title: "", body: "" });
    },
    noteUpdated(note) {
      console.log(note);
    },
    deleteNote(note) {
      this.notes.splice(this.notes.indexOf(note), 1);
    },
  },
};
</script>

<style lang="scss">
.tc-notes-wrapper {
  padding-top: 30px;
  .tc-notes {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 auto;
  }
}
</style>
