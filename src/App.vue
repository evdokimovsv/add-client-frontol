<template>
  <div id="app">
    <el-row>
      <el-col :xl="{span:10, offset: 6}" :lg="{span:18, offset: 3}" justify="center">
        <img alt="Vue logo" src="./assets/logo.png" style="center">
        <h1>Анкета постоянного покупателя</h1>
        <el-form ref="form" :model="form">
          <el-row :gutter="10">
            <el-col :span="8" :offset="8">
              <el-form-item label="Введите номер карты" required>
                <el-input v-model="form.card" autofocus :disabled="secondBlock"></el-input>
              </el-form-item>
              <el-form-item v-show="!secondBlock">
                <el-button type="primary" @click="checkCard">Далее</el-button>
              </el-form-item>
            </el-col>
          </el-row>
          <div v-show="secondBlock">
            <el-row :gutter="10">
              <el-col :span="8">
                <el-form-item label="Фамилия" required style>
                  <el-input type="surname" v-model="form.surname"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="Имя" required>
                  <el-input type="name" v-model="form.name"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="Отчество">
                  <el-input type="middlename" v-model="form.middlename"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="8">
                <el-form-item label="День рождения" required>
                  <el-date-picker v-model="form.birthday" type="date" style="width: 100%;"></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="Телефон" required>
                  <el-input type="tel" v-model="form.phone">
                    <span slot="prepend">+7</span>
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="Email" required>
                  <el-input type="email" v-model="form.email"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-form-item label required>
              <el-checkbox v-model="form.spamAgree">Клиент согласен на получение рассылки?</el-checkbox>
            </el-form-item>
            <el-form-item>
              <el-button @click="clear">Сбросить</el-button>
              <el-button type="primary" @click="validate">Записать</el-button>
            </el-form-item>
          </div>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      secondBlock: false,
      form: {
        сard: "",
        surname: "",
        middlename: "",
        name: "",
        birthday: "",
        email: "",
        phone: "",
        spamAgree: true
      }
    };
  },
  methods: {
    checkCard: function() {
      this.secondBlock = true;
    },
    validate: function() {},
    clear: function() {}
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.el-form-item__content {
  margin-bottom: 0px;
  margin-top: 0px;
}
</style>
