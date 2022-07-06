import commentListItem from './commentListItem.js'
import commentCreate from './commentCreate.js'

let template = `
  <div>
    <div v-for="item in comments" v-bind:key="item.comment_id">
      <comment-list-item v-bind:commentObj="item"></comment-list-item>
    </div>
    <comment-create v-bind:contentId="contentId"
                    v-bind:reloadComment="reloadComment"></comment-create>
  </div>`

export default {
  template: template,
  components: {
    commentListItem,
    commentCreate
  },
  props : ['contentId'],
  data: function () { 
    return {
      //this: component를 가르킴
      comments: this.$parent.$parent.getData().commentData.filter(comment => { 
        return comment.content_id == this.contentId;
      })
    }
  },
  methods: {
    reloadComment: function () { 
      this.comments = this.$parent.$parent.getData().commentData.filter(comment => { 
        return comment.content_id == this.contentId;
      })
    }
  }
}