import {select, submit, verifyPageTitle} from "../support/common-helpers";

class SelectNanomaterialPage {

    assertPageTitle() {
        verifyPageTitle("Select which nanomaterials are included in the item")
    }

    choose(answer: string) {
        select(answer)
        submit()
    }

    chooseMulti(list: string[]) {
        for (let i = 0; i < list.length; i++) {
            select(list[i])
        }
        submit()
    }
}

export default new SelectNanomaterialPage;