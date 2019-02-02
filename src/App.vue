<template>
  <div id="app">
    <el-row>
      <el-col :xl="{span:10, offset: 6}" :lg="{span:18, offset: 3}" justify="center">
        <img alt="Vue logo" src="./assets/logo.png" style="center">
        <h1>Электронная анкета постоянного покупателя</h1>
        <el-form
          :model="form"
          ref="form"
          @validate="validate"
          :rules="rules"
          @submit.native.prevent
        >
          <el-row :gutter="10">
            <el-col :span="8" :offset="8">
              <el-form-item label="Номер штрих-кода карты" required prop="card" :rules="rules.card">
                <el-input
                  v-model="form.card"
                  autofocus
                  :disabled="secondBlock"
                  @keyup.enter.native="checkCard"
                >
                  <template slot="prepend">2501723</template>
                </el-input>
              </el-form-item>
              <el-form-item v-show="!secondBlock">
                <el-button type="primary" @click="checkCard">Далее</el-button>
              </el-form-item>
            </el-col>
          </el-row>
          <div v-show="secondBlock">
            <el-row :gutter="10">
              <el-col :span="8">
                <el-form-item label="Фамилия" required prop="surname" :rules="rules.surname">
                  <el-input type="surname" v-model="form.surname"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="Имя" required prop="name" :rules="rules.name">
                  <el-input type="name" v-model="form.name"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="Отчество" prop="middlename" :rules="rules.middlename">
                  <el-input type="middlename" v-model="form.middlename"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="8">
                <el-form-item
                  label="День рождения"
                  required
                  prop="birthday"
                  :rules="rules.birthday"
                >
                  <el-date-picker v-model="form.birthday" type="date" style="width: 100%;" default-value="1990-10-01"></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="Телефон" required prop="phone" :rules="rules.phone">
                  <el-input type="tel" v-model="form.phone">
                    <template slot="prepend">+7</template>
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="Email" required prop="email" :rules="rules.email">
                  <el-input type="email" v-model="form.email"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-form-item label required>
              <el-checkbox v-model="form.spamAgree">Клиент согласен на получение рассылки?</el-checkbox>
            </el-form-item>
            <el-form-item>
              <el-button @click="reset">Сбросить</el-button>
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
      },
      rules: {
        card: [
          {
            required: true,
            message: "Пожалуйста, введите номер карты",
            trigger: "blur"
          },
          {
            min: 6,
            max: 6,
            message: "Длинна поля должна быть 6 символов",
            trigger: "blur"
          }
        ],
        surname: [
          {
            required: true,
            message: "Пожалуйста, введите фамилию",
            trigger: "blur"
          },
          {
            type: "string",
            pattern: "^[а-яА-Я]",
            message: "Язык ввода должен быть русским",
            trigger: "blur"
          }
        ],
        name: [
          {
            required: true,
            message: "Пожалуйста, введите имя",
            trigger: "blur"
          },
          {
            type: "string",
            pattern: "^[а-яА-Я]",
            message: "Язык ввода должен быть русским",
            trigger: "blur"
          }
        ],
        middlename: [
          {
            required: true,
            message: "Пожалуйста, введите отчетсво",
            trigger: "blur"
          },
          {
            type: "string",
            pattern: "^[а-яА-Я]",
            message: "Язык ввода должен быть русским",
            trigger: "blur"
          }
        ],
        birthday: [
          {
            required: true,
            message: "Пожалуйста, введите день рождение",
            trigger: "blur"
          }
        ],
        phone: [
          {
            required: true,
            message: "Пожалуйста, введите телефон",
            trigger: "blur"
          },
          {
            min: 10,
            max: 10,
            message: "Длинна поля должна быть 10 символов",
            trigger: "blur"
          }
        ],
        email: [
          {
            required: true,
            type: "email",
            message: "Пожалуйста, введите  корректный email",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    checkCard: function() {
      this.$refs.form.validateField("card", error => {
        if (!error) {
          this.secondBlock = true;
        }
      });
    },
    validate: function() {},
    reset: function() {
      this.$refs["form"].resetFields();
      this.secondBlock = false;
    }
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
