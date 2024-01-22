<template>
    <!-- ロードがある程度終わるまでバージョンが表示されたタイトル画面を用意する -->
    <section>
        toppage
    </section>

    <section>
        <section>
            <NuxtPage />
        </section>
        <section>
            <v-bottom-navigation grow>

                <NuxtLink v-bind:to="{ name: 'index-album-test' }">
                    <v-btn value="ar">
                        <v-icon>mdi-link-variant</v-icon>
                        <span>アルバム</span>
                    </v-btn>
                </NuxtLink>

                <NuxtLink v-bind:to="{ name: 'index-add-test' }">
                    <v-btn value="ar">
                        <v-icon>mdi-plus-box-outline</v-icon>
                        <span>追加</span>
                    </v-btn>
                </NuxtLink>

                <NuxtLink v-bind:to="{ name: 'index-ar-play' }">
                    <v-btn value="ar">
                        <v-icon>mdi-cube-scan</v-icon>
                        <span>AR</span>
                    </v-btn>
                </NuxtLink>

                <NuxtLink v-bind:to="{ name: 'index-store-test' }">
                    <v-btn value="store">
                        <v-icon>mdi-briefcase-outline</v-icon>
                        <span>ストア</span>
                    </v-btn>
                </NuxtLink>

                <NuxtLink v-bind:to="{ name: 'index-account-test' }">
                    <v-btn value="account">
                        <v-icon>mdi-account</v-icon>
                        <span>設定</span>
                    </v-btn>
                </NuxtLink>

            </v-bottom-navigation>
        </section>
    </section>
</template>

<!-- <style>
body,
#__nuxt,
#__layout,
.container {
    height: 100%;
    margin: 0px;
    overflow: hidden;
}</style> -->