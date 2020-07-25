<template>
  <div class="note">
    <div class="note-header">
      <span @click="deleteNote" class="note-close">
        X
      </span>
    </div>
    <div class="note-title" contenteditable="" @blur="titleChanged">
      {{ note.title }}
    </div>
    <div class="note-body" contenteditable="" @blur="bodyChanged">
      {{ note.body }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Note",
  props: {
    note: {
      type: Object,
      required: true,
    },
  },
  methods: {
    titleChanged($event) {
      console.log($event);
      this.note.title = $event.target.innerHTML;
      this.$emit("noteUpdated", this.note);
    },
    bodyChanged($event) {
      console.log($event);
      this.note.body = $event.target.innerHTML;
      this.$emit("noteUpdated", this.note);
    },
    deleteNote() {
      this.$emit("deleteNote", this.note);
    },
  },
};
</script>

<style lang="scss" scoped>
.note {
  background-color: #f0c806;
  border-radius: 8px;
  width: 280px;
  margin: 0 10px 20px;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.2);
  transition: all 0.5s;
  cursor: pointer;
  font-family: "Avenir";
  .note-header {
    padding: 10px 16px 0;
    .note-close {
      display: inline-block;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      line-height: 24px;
      text-align: center;
      transition: all 0.3s;
      &:hover {
        background-color: rgba(0, 0, 0, 0.2);
      }
      &:focus {
        box-shadow: inset 2px 3px 0px rgba(0, 0, 0, 0.8);
      }
    }
    .note-close {
      float: right;
    }
  }
  .note-title,
  .note-body {
    outline: 0;
  }
  .note-title {
    font-size: 24px;
    padding: 10px 16px;
    font-weight: bold;
  }
  .note-body {
    font-size: 20px;
    padding: 10px 16px 16px;
  }
  &:hover {
    box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.3);
  }
}
</style>
