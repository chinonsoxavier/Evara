<script lang="ts" setup>
import BetweenComponent from '../../../components/BetweenComponent.vue';
import TextButton from '../../../components/buttons/TextButton.vue';
import CenterComponent from '../../../components/CenterComponent.vue';
import ColumnStartComponent from '../../../components/ColumnStartComponent.vue';
import EvComponent from '../../../components/EvComponent.vue';
import HeaderRoutePaginiationComponent from '../../../components/HeaderRoutePaginiationComponent.vue';
import IconComponent from '../../../components/IconComponent.vue';
import StarFilledIcon from '../../../components/icons/filled-icons/StarFilledIcon.vue';
import ImageComponent from '../../../components/ImageComponent.vue';
import EvInput from '../../../components/inputs/EvInput.vue';
import FooterComponent from '../../../components/layout/FooterComponent.vue';
import NewsLetterComponent from '../../../components/layout/NewsLetterComponent.vue';
import NavBarComponent from '../../../components/nav-menus/NavBarComponent.vue';
import ProductsSlider from '../../../components/ProductsSlider.vue';
import StartComponent from '../../../components/StartComponent.vue';
import { Avatar1 } from '../../../utilities/exports';
import ProductDetailsHeroInfo from './components/ProductDetailsHeroInfo.vue';
import ProductsDetailsHeroSllider from './components/ProductsDetailsHeroSllider.vue';


const ProductsDetailsRef = ref("Additional-info");
const ratings = ref(0);

const SetRatings = (rating) => {
  if ((ratings.value !== undefined) | null) {
    ratings.value = rating;
  }
};

const ToggleProductDetailsRef = (Active) => {
  if (ProductsDetailsRef.value) {
    ProductsDetailsRef.value = Active;
  }
};
</script>

<template>
  <section>
    <nav><NavBarComponent />      <HeaderRoutePaginiationComponent />
</nav>
    <section>
      <EvComponent class="h-[800px] py-20">
        <CenterComponent class="w-full gap-4 h-full">
          <ProductsDetailsHeroSllider />
          <ProductDetailsHeroInfo />
        </CenterComponent>
      </EvComponent>
      <EvComponent>
        <StartComponent class="normalText gap-3">
          <p
            :class="[
              ProductsDetailsRef == 'Additional-info'
                ? 'text-primary font-bold '
                : 'text-lightText font-semibold',
            ]"
            class="cursor-pointer hover:text-primary duration-500"
            @click="ToggleProductDetailsRef('Additional-info')"
          >
            Additional Info
          </p>
          <p
            :class="[
              ProductsDetailsRef == 'Reviews'
                ? 'text-primary font-bold'
                : 'text-lightText font-semibold',
            ]"
            class="cursor-pointer hover:text-primary duration-500"
            @click="ToggleProductDetailsRef('Reviews')"
          >
            Reviews (3)
          </p>
        </StartComponent>
        <Transition name="slide-fade">
          <CenterComponent
            v-if="ProductsDetailsRef == 'Additional-info'"
            class="border flex-col border-collapse border-gray-300 mt-5"
          >
            <BetweenComponent class="smText px-1 border-collapse border-b  border-b-gray-300">
              <StartComponent class="px-3">
                <p>Stand Up</p>
              </StartComponent>
              <StartComponent class=" border-l border-collapse border-l-gray-300 p-3">
                <p class="font-normal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus.
                </p>
              </StartComponent>
            </BetweenComponent>
            <BetweenComponent class="smText px-1 border-collapse border-b  border-b-gray-300">
              <StartComponent class="p-3">
                <p>Stand Up</p>
              </StartComponent>
              <StartComponent class=" border-l border-collapse border-l-gray-300 p-3">
                <p class="font-normal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus.
                </p>
              </StartComponent>
            </BetweenComponent>
            <BetweenComponent class="smText px-1 border-collapse border-b  border-b-gray-300">
              <StartComponent class="p-3">
                <p>Stand Up</p>
              </StartComponent>
              <StartComponent class=" border-l border-collapse border-l-gray-300 p-3">
                <p class="font-normal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus.
                </p>
              </StartComponent>
            </BetweenComponent>
            <BetweenComponent class="smText px-1 border-collapse border-b  border-b-gray-300">
              <StartComponent class="p-3">
                <p>Stand Up</p>
              </StartComponent>
              <StartComponent class=" border-l border-collapse border-l-gray-300 p-3">
                <p class="font-normal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus.
                </p>
              </StartComponent>
            </BetweenComponent>
            <BetweenComponent class="smText px-1 border-collapse border-b  border-b-gray-300">
              <StartComponent class="p-3">
                <p>Stand Up</p>
              </StartComponent>
              <StartComponent class=" border-l border-collapse border-l-gray-300 p-3">
                <p class="font-normal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus.
                </p>
              </StartComponent>
            </BetweenComponent>
            <BetweenComponent class="smText px-1 border-collapse border-b  border-b-gray-300">
              <StartComponent class="p-3">
                <p>Stand Up</p>
              </StartComponent>
              <StartComponent class=" border-l border-collapse border-l-gray-300 p-3">
                <p class="font-normal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus.
                </p>
              </StartComponent>
            </BetweenComponent>
            <BetweenComponent class="smText px-1 border-collapse border-b  border-b-gray-300">
              <StartComponent class="p-3">
                <p>Stand Up</p>
              </StartComponent>
              <StartComponent class=" border-l border-collapse border-l-gray-300 p-3">
                <p class="font-normal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus.
                </p>
              </StartComponent>
            </BetweenComponent>
            <BetweenComponent class="smText px-1 border-collapse border-b  border-b-gray-300">
              <StartComponent class="p-3">
                <p>Stand Up</p>
              </StartComponent>
              <StartComponent class=" border-l border-collapse border-l-gray-300 p-3">
                <p class="font-normal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus.
                </p>
              </StartComponent>
            </BetweenComponent>
            <BetweenComponent class="smText px-1 border-collapse border-b  border-b-gray-300">
              <StartComponent class="p-3">
                <p>Stand Up</p>
              </StartComponent>
              <StartComponent class=" border-l border-collapse border-l-gray-300 p-3">
                <p class="font-normal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus.
                </p>
              </StartComponent>
            </BetweenComponent>
            <BetweenComponent class="smText px-1 border-collapse border-b  border-b-gray-300">
              <StartComponent class="p-3">
                <p>Stand Up</p>
              </StartComponent>
              <StartComponent class=" border-l border-collapse border-l-gray-300 p-3">
                <p class="font-normal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus.
                </p>
              </StartComponent>
            </BetweenComponent>
          </CenterComponent>
        </Transition>
        <Transition name="slide-fade">
          <ColumnStartComponent
            class="py-5"
            v-if="ProductsDetailsRef == 'Reviews'"
          >
            <StartComponent
              class="smText py-3 border-b border-b-gray-300 gap-5"
            >
              <ColumnStartComponent class="gap-2">
                <ImageComponent
                  :rounded="true"
                  class="max-w-[70px] max-h-[70px]"
                  :src="Avatar1"
                />
                <p class="font-semibold whitespace-nowrap">Jackie Chan</p>
              </ColumnStartComponent>
              <ColumnStartComponent class="justify-between h-full">
                <StartComponent class="gap-2">
                  <IconComponent
                    class="w-4 h-4"
                    v-for="stars in Array.from(
                      { length: 5 },
                      (_, index) => index + 1
                    )"
                    :key="stars"
                  >
                    {{ index }}
                    <StarFilledIcon
                      v-if="stars <= 4"
                      class="w-4 h-4 fill-orange-500"
                    />
                    <StarFilledIcon class="w-4 h-4 fill-gray-500" v-else />
                  </IconComponent>
                </StartComponent>
                <p class="my-3">
                  Thank you very fast shipping from Poland only three days
                </p>
                <p>December 4,2020 at 2:20 PM</p>
              </ColumnStartComponent>
            </StartComponent>
            <StartComponent
              class="py-3 smText border-b border-b-gray-300 gap-5"
            >
              <ColumnStartComponent class="gap-2">
                <ImageComponent
                  :rounded="true"
                  class="max-w-[70px] max-h-[70px]"
                  :src="Avatar1"
                />
                <p class="font-semibold whitespace-nowrap">Jackie Chan</p>
              </ColumnStartComponent>
              <ColumnStartComponent class="justify-between h-full">
                <StartComponent class="gap-2">
                  <IconComponent
                    class="w-4 h-4"
                    v-for="stars in Array.from(
                      { length: 5 },
                      (_, index) => index + 1
                    )"
                    :key="stars"
                  >
                    {{ index }}
                    <StarFilledIcon
                      v-if="stars <= 4"
                      class="w-4 h-4 fill-orange-500"
                    />
                    <StarFilledIcon class="w-4 h-4 fill-gray-500" v-else />
                  </IconComponent>
                </StartComponent>
                <p class="my-3">
                  Thank you very fast shipping from Poland only three days
                </p>
                <p>December 4,2020 at 2:20 PM</p>
              </ColumnStartComponent>
            </StartComponent>
            <StartComponent
              class="py-3 smText border-b border-b-gray-300 gap-5"
            >
              <ColumnStartComponent class="gap-2">
                <ImageComponent
                  :rounded="true"
                  class="max-w-[70px] max-h-[70px]"
                  :src="Avatar1"
                />
                <p class="font-semibold whitespace-nowrap">Jackie Chan</p>
              </ColumnStartComponent>
              <ColumnStartComponent class="justify-between h-full">
                <StartComponent class="gap-2">
                  <IconComponent
                    class="w-4 h-4"
                    v-for="stars in Array.from(
                      { length: 5 },
                      (_, index) => index + 1
                    )"
                    :key="stars"
                  >
                    {{ index }}
                    <StarFilledIcon
                      v-if="stars <= 4"
                      class="w-4 h-4 fill-orange-500"
                    />
                    <StarFilledIcon class="w-4 h-4 fill-gray-500" v-else />
                  </IconComponent>
                </StartComponent>
                <p class="my-3">
                  Thank you very fast shipping from Poland only three days
                </p>
                <p>December 4,2020 at 2:20 PM</p>
              </ColumnStartComponent>
            </StartComponent>
          </ColumnStartComponent>
        </Transition>
      </EvComponent>
      <EvComponent class="my-10">
        <p class="normalTex font-medium">Add a review</p>
        <StartComponent class="gap-1 my-2">
          <IconComponent
            class="w-4 h-4"
            v-for="stars in Array.from({ length: 5 }, (_, index) => index + 1)"
            :key="stars"
            @click.stop="SetRatings(stars)"
          >
            <StarFilledIcon
              v-if="stars <= ratings.value"
              class="w-4 h-4 fill-orange-500"
            />
            <StarFilledIcon class="w-4 h-4 fill-gray-500" v-else />
          </IconComponent>
        </StartComponent>
        <textarea
          placeholder="write a comment"
          :rows="9"
          class="mt-2 resize-none border border-gray-300 w-full p-3 outline-none"
        >
write a comment
        </textarea>
        <CenterComponent class="py-5 gap-5">
          <EvInput class="flex-1" type="text" placeholder="Name" />
          <EvInput class="flex-1" type="email" placeholder="Email" />
        </CenterComponent>
        <StartComponent>
          <TextButton text="Submit Review" theme="primary" />
        </StartComponent>
      </EvComponent>

      <ProductsSlider label="Related Products" />
    </section>
    <footer><NewsLetterComponent/> <FooterComponent /></footer>
  </section>
</template>

<style>
.slide-fade {
  transition: all 0.15s ease-out;
}

</style>
