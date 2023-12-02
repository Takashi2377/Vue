<template>
  <div class="content">
    <div class="postList">
      <div class="postItem" v-for="n in 10">
        <img
          src=""
          alt=""
          width="100%"
          height="100%"
          style="background: #eee"
        />
        <div class="postInfo">
          <div class="postMeta">
            <TheAvatar />
            <span>張國棟</span>
            <span class="postPubDate">12hrs before</span>
            <div class="postActions">
              <TheIcon icon="like" fill="none" stroke="#000000" /><span
                >7w</span
              >
              <TheIcon icon="comment" fill="none" stroke="#000000" /><span
                >7.7w</span
              >
              <TheIcon icon="favorite" fill="none" stroke="#000000" /><span
                >77w</span
              >
            </div>
          </div>
          <div class="postDesc">
            <p>這到底甚麼閃現 吼吼吼吼吼</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TheAvatar from "../components/TheAvatar.vue";
import TheIcon from "../components/TheIcon.vue";
</script>

<style scoped>
.content {
  width: 80vw;
  margin: 0 auto;
  margin-top: 88px;
  max-width: 1124px;
}
.postActions {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  column-gap: 16px;
  row-gap: 4px;
}

.postActions > svg {
  width: 32px;
  height: 32px;
  grid-row: 1 / 2;
  cursor: pointer;
}

.postActions > span {
  font-size: 14px;
}

.postItem {
  box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
}

.postInfo {
  padding: 24px;
}

.postItem > img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  background: #eee;
  cursor: pointer;
}

.postMeta {
  display: grid;
  grid-template-areas:
    "avatar name actions"
    "pubDate pubDate actions";
  grid-template-columns: 42px 1fr 3fr;
  row-gap: 6px;
}
.postMeta .avatar {
  grid-area: avatar;
}

.postMeta .postPubDate {
  grid-area: pubDate;
  color: #9f9f9f;
  font-size: 14px;
}

.postActions {
  grid-area: actions;
  justify-self: end;
}

.postDesc {
  margin-top: 28px;
  white-space: pre-line;
}

.postList {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
}
</style>
