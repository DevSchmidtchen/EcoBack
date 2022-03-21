<template>
    <section class="alternative_item_section">
        <div class="alternative_item">
            <div class="alternative_item_element first">
                <img src="../assets/products/milk.png" alt="">
                <p>Milk</p>
            </div>
            <div class="alternative_item_element middle">
                <img src="../assets/icon/arrow_forward.svg" alt="" srcset="">
                <p>- 1.5 Kg CO2</p>
            </div>
            <div class="alternative_item_element last">
                <img src="../assets/products/hafer_milch.png" alt="">
                <p>Oat Milk</p>
            </div>
        </div>
        <div class="alternative_item">
              <div class="alternative_item_element first">
                  <img src="../assets/products/fleisch.png" alt="">
                  <p>Steak</p>
              </div>
              <div class="alternative_item_element middle">
                  <img src="../assets/icon/arrow_forward.svg" alt="" srcset="">
                  <p>- 5.1 Kg CO2</p>
              </div>
              <div class="alternative_item_element last">
                  <img src="../assets/products/tofu.png" alt="">
                  <p>Tofu</p>
              </div>
          </div>
          <div class="alternative_item">
                <div class="alternative_item_element first">
                    <img src="../assets/products/flasche.png" alt="">
                    <p>Plastic Bottle</p>
                </div>
                <div class="alternative_item_element middle">
                    <img src="../assets/icon/arrow_forward.svg" alt="" srcset="">
                    <p>- 1.5 Kg CO2</p>
                </div>
                <div class="alternative_item_element last">
                    <img src="../assets/products/flasche2.png" alt="">
                    <p>Glas Bottle</p>
                </div>
            </div>
    </section>
</template>

<script setup>
  
</script>

<style>
  .alternative_item_section {
    margin-top: 15px;
    margin-left: calc((100vw - 330px ) / 2);
    margin-right: calc((100vw - 330px ) / 2);

  }
  
.alternative_item {
    background-color: #22C55E;
    display: inline-block;
    border-radius: 10px;
}

.alternative_item img {
    height: 80px;
    display: block;
    margin-left: auto;
    margin-right: auto;
}

.alternative_item_element {
    float: left;
    width: 100px;
    height: 100px;
    text-align: center;
    border-radius: 10px;
    margin: 5px;
}



.alternative_item_element p {
    margin: 0px;
    color: white;
}

.arrow {
    color:white;
}
</style>