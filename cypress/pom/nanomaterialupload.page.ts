import {submit, verifyPageTitle} from "../support/common-helpers";

class NanomaterialUploadPage {

    assertPageTitle() {
        verifyPageTitle("Upload details about the nanomaterial")
    }

    chooseFile(filename: string) {
        const filepath = `../images/${filename}`
        cy.get('input[type="file"]').attachFile(filepath)
        submit()
    }

}

export default new NanomaterialUploadPage;