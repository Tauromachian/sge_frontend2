<script>
import {
  VList,
  VSubheader,
  VListItemGroup,
  VListItem,
  VListItemContent,
  VListItemTitle,
  VCheckbox,
  VListItemAction
} from "vuetify/lib";

export default {
  name: "ColumnSelectList",
  components: {
    "v-list": VList,
    "v-subheader": VSubheader,
    "v-list-item-group": VListItemGroup,
    "v-list-item": VListItem,
    "v-list-item-action": VListItemAction,
    "v-list-item-content": VListItemContent,
    "v-list-item-title": VListItemTitle,
    "v-checkbox": VCheckbox
  },
  data: function() {
    return {};
  },
  render: function(h) {
    const vListItems = this.makeList();

    return (
      <v-list flat>
        <v-subheader>Selecciona las columnas a mostrar</v-subheader>
        <v-list-item-group multiple vModel={this.visibleColumn}>
          {vListItems}
        </v-list-item-group>
      </v-list>
    );
  },
  methods: {
    makeList() {
      const vListItems = this.columns.map(column => {
        return (
          <v-list-item
            value={column.field}
            {...{
              scopedSlots: {
                default: scope => {
                  return this.makeListItem(scope.active, scope.toggle, column);
                }
              }
            }}
          >
            
          </v-list-item>
        );
      });

      return vListItems;
    },
    makeListItem(active, toggle, column) {
      return (
        [<v-list-item-action>
          <v-checkbox
            color="primary"
            onClick={toggle}
            vModel={active}
          ></v-checkbox>
        </v-list-item-action>
        ,
        <v-list-item-content>
          <v-list-item-title>{column.headerName}</v-list-item-title>
        </v-list-item-content>]
      );
    }

    // makeList() {
    //   let items = [];
    //   items = columns.map(element => {
    //     if (element.children) {
    //       return element.children.map(children => {
    //         return children.field;
    //       });
    //     } else {
    //       return element.field;
    //     }
    //   });
    // }
  },
  props: {
    value: Array,
    columns: Array
  },
  computed: {
    hide: {
      get() {
        return this.column;
      }
    },
    visibleColumn: {
      get() {
        return this.value;
      },
      set(selection) {
        this.$emit("input", selection);
      }
    }
  }
};
</script>