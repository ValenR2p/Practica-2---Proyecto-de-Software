export default function CreateInteraction(){
    return `<h1>Create Project</h1>
            <form id="form" class="row g-2">
                <div class="col-md-6 col-sm-12 ">
                  <label class="form-label" for="name">Name</label>
                  <input type="name" class="form-control" placeholder="Name" id="name">
                </div>
                <div class="col-md-6 col-sm-12">
                  <label class="form-label" for="endDate">End Date</label>
                  <input type="endDate" class="form-control" placeholder="End Date" id="endDate">
                </div>
                <div class="col-sm-12 col-md-6 ">
                  <label class="form-label" for="client">Client ID</label>
                  <input type="client" class="form-control" placeholder="Client" id="client">
                </div>
                <div class="col-md-6 col-sm-12 ">
                  <label class="form-label" for="campaign">Campaign Type</label>
                  <input type="campaign" class="form-control" id="campaign" placeholder="Campaign ID">
                </div>        
                <div class="function-buttons">
                    <a id="button" class="button">Create</a>
                </div>
            </form>
            `
}