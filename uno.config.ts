import {
  defineConfig,
  presetUno,
  presetMini,
  presetIcons,
  presetAttributify,
  transformerVariantGroup,
  transformerDirectives,
} from 'unocss'
import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'

export default defineConfig({
  presets: [
    presetUno(), // 添加 作用：启用 UnoCSS 的默认预设，它提供了大量的常见实用工具类，支持类似 Tailwind 的功能。
    presetMini({ dark: 'class' }), // 作用：启用精简的实用工具类，暗黑模式配置为 class 模式。意思是，你可以通过给元素添加 dark 类来切换暗黑模式。
    presetAttributify({ prefix: 'un-', prefixedOnly: true }), // 作用：启用 Attributify 模式，允许你在 HTML 中通过类似属性的方式应用样式。这里设置了 un- 作为前缀，且只处理有前缀的属性，避免与 HTML 原生属性冲突。
    presetIcons({
      // 添加 UnoCSS 的图标支持
      warn: true, // 如果图标名称无效，是否给出警告
      prefix: ['i-'], // 图标名称前缀，例如 i-home
      extraProperties: {
        display: 'inline-block',
      }, // 图标额外的 CSS 属性
      collections: {
        custom: FileSystemIconLoader('./src/assets/svgs', svg =>
          svg
            .replace(/(<svg.*?width=)"(.*?)"/, '$1"1em"')
            .replace(/(<svg.*?height=)"(.*?)"/, '$1"1em"'),
        ), //使用 em 单位才能实现通过修改字体大小
        // fe: FileSystemIconLoader('./src/assets/feather'), // 其他的自定义图标文件夹
      },
    }),
  ],
  transformers: [
    transformerDirectives(), //作用：允许在 CSS 文件中使用 UnoCSS 的指令，例如 @apply 指令可以复用现有的实用工具类，还可以处理媒体查询等功能。
    transformerVariantGroup(), //作用：简化类名的书写。它允许你将多个变体（如 hover:、focus:）放在一起使用。例如 hover:bg-red-500 focus:bg-blue-500 可以写成 hover focus:(bg-red-500 bg-blue-500)，更为简洁。
  ],
  shortcuts: {
    // 快捷书写
    'wh-full': 'w-full h-full',
    'flex-ac': 'flex justify-around items-center',
    'flex-bc': 'flex justify-between items-center',
    'flex-cc': 'flex justify-center items-center',
    'flex-sc': 'flex justify-start items-center',
    'flex-ec': 'flex justify-end items-center',
    'text-overflow': 'truncate', // 文本溢出省略
  },
  theme: {},
})
