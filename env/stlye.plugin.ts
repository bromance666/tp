import shell from 'shelljs'
export default function styleTransform() {
  return {
    name: 'styleTransform', // this name will show up in warnings and errors
    // 这是输出生成阶段的最后一个钩子
    writeBundle (e) {
      shell.rm('-rf', 'dist');
      shell.mkdir('-p', ['dist']) // 创建dist目录，如果有dist目录，则覆盖dist中的styles文件夹
      shell.cp('-R', 'packages/styles', 'dist/styles')
    }
  };
}