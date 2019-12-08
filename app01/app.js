const loading = document.getElementById('loading');
const message = document.getElementById('message');

const buttonLoadAjax = document.getElementById('load_ajax');
buttonLoadAjax.addEventListener('click', () => {
  try {
    loading.style.display = 'block';
    const objPropertiesAxios = {
      responseType: 'text'
    }
    axios.get('text.txt', objPropertiesAxios)
      .then(function (res) {
        if (res.status == 200) message.innerHTML = res.data;
        console.log(res);
      })
      .catch(function (err) {
        message.innerText = `Error => ${err}`;
      })
      .then(function () {
        loading.style.display = 'none';
      });
  } catch (err) {
    console.error("buttonLoadAjax.click =>", err)
  }
});

const buttonJsonGet = document.getElementById('json_get');
buttonJsonGet.addEventListener('click', () => {
  try {
    loading.style.display = 'block';
    const objPropertiesAxios = {
      responseType: 'text'
    }
    axios.get('https://jsonplaceholder.typicode.com/todos/1', objPropertiesAxios)
      .then(function (res) {
        if (res.status == 200) message.innerHTML = res.data.title;
        console.info(res);
      })
      .catch(function (err) {
        message.innerText = `Error => ${err}`;
      })
      .then(function () {
        loading.style.display = 'none';
      });
  } catch (err) {
    console.error("buttonJsonGet.click =>", err)
  }
});

const buttonJsonPost = document.getElementById('json_post');
buttonJsonPost.addEventListener('click', function () {
  try {
    loading.style.display = 'block';
    const objPropertiesAxios = {
      data: {
        userId: 1,
        title: 'New Post',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, in!'
      }
    }
    axios.post('https://jsonplaceholder.typicode.com/posts', objPropertiesAxios)
      .then(function (res) {
        if (res.status == 201) {
          message.innerHTML = `New Post with id: ${res.data.id}`;
        }
      })
      .catch(function (err) {
        message.innerText = `Error => ${err}`;
      })
      .then(function () {
        loading.style.display = 'none';
      });
  } catch (err) {
    console.error("buttonJsonPost.click =>", err)
  }
});