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
import AddNewButton from "./AddNewButton";
import Note from "./Note";
 export default {
  name: "Notes",
  components: { Note, AddNewButton },
  data() {
    return {
      notes: [
				{
      title: 'sun',
      body: 'yellow'
    },
    {
      title: 'moon',
      body: 'white'
    },
    {
      title: 'cloud',
      body: 'floats'
    }
			],
    };
  },
  methods: {
     addNote() {
      this.notes.unshift({title:'', body:''});
    },
    noteUpdated(note){
        console.log(note);
		},
    deleteNote(note) {
      this.notes.splice(this.notes.indexOf(note), 1);     
    },
  },
  /* async beforeMount() {
      const {status, data} = await notesService.get();
      if (status === 200) {
        this.notes = data;
      }
    }  */
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
