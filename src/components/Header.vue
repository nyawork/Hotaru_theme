<template>
  <div class="ui vertical masthead center aligned segment" id="header">
    <div id="header-content">
      <h1 class="ui inverted header">
        CandiVerse
      </h1>
      <p>𝖂𝖍𝖊𝖗𝖊 𝖙𝖍𝖊 𝖉𝖗𝖊𝖆𝖒 𝖑𝖆𝖓𝖉𝖘</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header"
}
</script>
<style scoped>
#header {
  height: 25rem;
  background: url("../assets/img/cover.webp") no-repeat center center;
}

/*
@media(max-width: 768px) {
  #header {
    height: 20rem !important;
    background: url("../assets/img/cover_mobile.webp") no-repeat center center !important;
  }
}
*/

#header::before {
  content: '';
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  background: rgba(66, 64, 64, .4);
}

/*#header::after {
    content: '';
    display: inline-block;
    vertical-align: middle;
    height: 100%;
}*/
#header-content {
  /*display: inline-block;*/
  text-shadow: 2px 2px 2px #666;
  position: absolute;
  z-index: 3;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#header h1 {
  font-size: 3.57rem;
  white-space: nowrap;
}

#header p {
  font-size: 1.5rem;
  color: aliceblue;
  /*white-space: nowrap;*/
}
</style>