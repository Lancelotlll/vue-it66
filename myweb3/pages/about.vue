<template>
  <div style="margin-bottom: 5px;margin-left: 5px;">
    <img :src="picture" :width="size" :height="size">
    <p>ชื่อ :{{ getfullname() }}</p>
    <p>นามสกุล :{{ lastname }}</p>
    <p>อายุ :{{ age }}</p>
    <p>ที่อยู่ :<span v-html="address"></span></p>
    <p v-if="hobby.length ===0">ไม่มีงานอดิเรก</p>
    <div v-else>
    <p>งานอดิเรก :</p>
    <ul>
      <li v-for="item in hobby">{{ item }}</li>
    </ul>
    </div>
    <p>ข้อมูลพื้นฐาน</p>
    <ul>
      <li v-for="(value,key) in general" :key="key">{{ key }} : {{ value }}</li>
    </ul>
    <button @click="showData">คลิกเพื่อดูข้อมูล</button>
    <button @click="increment(10)">เพิ่มค่า</button>
    <button @click="decrement(3)">ลดค่า</button>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        firstname: "Surasit",
        lastname: "Suwannachat",
        age: 17,
        address: "<i>Chonburi</i>",
        picture: "https://scontent.fbkk5-3.fna.fbcdn.net/v/t39.30808-6/337746963_235224672316075_8105998645412962367_n.jpg?_nc_cat=105&cb=99be929b-59f725be&ccb=1-7&_nc_sid=174925&_nc_eui2=AeFVAvTMHGhmecKWmlMheiqsCnOB5O0GHrYKc4Hk7QYett5rZuWgC44t31CgrQcs8iUS2E6r4MAaHkaFoahSbnbI&_nc_ohc=1VhCQCZplbYAX_Ub5KZ&_nc_ht=scontent.fbkk5-3.fna&oh=00_AfBITT_ff7d6grlWMN3oTxeSdANThvZ_adPWU2ymGL0D7Q&oe=64D9AF0A",
        size: 250,
        hobby : ["เล่นเกม","ฟังเพลง","ดูหนัง","อ่านหนังสือ","นอน"],
        general : {เพศ:"ชาย",น้ำหนัก:125,ส่วนสูง:174,โรคประจำตัว:"false"}
      }
    },
    methods: {
      getfullname(){
          return `${this.firstname} ${this.lastname}`  
      },
      showData(){
        alert(this.firstname)
      },
      increment(value){
        this.age += value
      },
      decrement(value){
        this.age -= value
      },
      setNickName(event){
        this.nickname=event.target.value
      },
      submitForm(e){
        e.preventDefault();
        alert('บันทึกข้อมูลเรียบร้อย')
      }
    }
  }

</script>