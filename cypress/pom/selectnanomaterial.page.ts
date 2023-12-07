import {select, submitButton, verifyPageTitle} from "../support/common-helpers";

class SelectNanomaterialPage {

    assertPageTitle() {
        verifyPageTitle("Select which nanomaterials are included in the item")
    }

    choose(answer: string) {
        select(answer)
        submitButton()
    }

    chooseMulti(list: string[]) {
        for (let i = 0; i < list.length; i++) {
            select(list[i])
        }
        submitButton()
    }
}

export default new SelectNanomaterialPage;