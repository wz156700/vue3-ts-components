import { defineComponent, reactive, ref, toRef, Ref } from "vue";
import MonacoEditor from "./components/MonacoEditor";
const schema = {
  type: "string",
};
function toJson(data: any) {
  return JSON.stringify(data, null, 2);
}
export default defineComponent({
  setup() {
    const schemaRef: Ref<any> = ref(schema);
    const handleCodeChange = (code: any) => {
      try {
        schemaRef.value = JSON.parse(code);
      } catch (error) {
        console.log(error);
      }
    };

    return () => {
      const code = toJson(schemaRef.value);
      console.log(code);
      return (
        <div id="app">
          <MonacoEditor
            code={code}
            onChange={handleCodeChange}
            title="Schema"
          />
        </div>
      );
    };
  },
});
