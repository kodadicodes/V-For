
  // Vue uygulamasını oluştur
  const app = Vue.createApp({
    // Vue template içinde kullanılan özel direktif ve etiketlerin açıklamaları:

    // v-for: Bir dizi veya nesne üzerinde döngü yapmak için kullanılır.
    // persons dizisindeki her eleman için bir li elementi oluşturulur.
    template: `
      <ul>
        <li v-for="person in persons">Çalışan: {{person.isim}} - Maaş: {{person.maas}}</li>
      </ul>
    `,

    // Vue uygulamasının veri bölümü, persons adında bir dizi içerir
    data() {
      return {
        persons: [
          { isim: "Varol", maas: 14250 },
          { isim: "Ahmet", maas: 15250 },
          { isim: "Elif", maas: 16250 }
        ]
      };
    },

    // Vue uygulamasının metot bölümü, şu an boş bir metot içermektedir
    methods: {
      method() {
        // Metot içeriği
      }
    },
  });

  // Vue uygulamasını belirtilen #app elementine bağla
  app.mount("#app");