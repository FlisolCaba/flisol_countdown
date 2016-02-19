var frases = [
  "Adding Hidden Agendas",
  "Adjusting Snacks",
  "Calculating Random Installation Errors",
  "Opening Birritas",
  "Calibrating Ip Address Collision Point",
  "Extracting Resources",
  "~$ man tar",
  "Untangling Wires",
  "Downloading Never-Used Distributions",
  "Normalizing Power",
  "Searching Founds",
  "Designing T-Shirts",
  "Resolving GUID Conflicts",
  "Adding Negative Karma To Systemd",
  "Proposing Jokes About *BSD",
  "Dockerizing Reality",
  "Patching Unpatched Wires",
  "Printing Posters",
  "Begging For Resources",
  "Electrocuting Motherboards",
  "Denying Responsibility",
  "Hiding Code Errors",
  "Starting Flamewars About E-Voting (You Can Vote Online)",
  "Talking With Communities",
  "Drinking More Beer",
  "Expecting Talks",
  "Sending Spam",
  "Selling User Data",
  "Killing Java",
  "Stealing Hard Drives",
  "Conquering The World",
  "Reviewing Conquering Plans",
  "Talking With The MiTM",
  "Restoring btrfs",
  "Defragmenting Hard Drives",
  "Migrating Flux Capacitor",
  "Erasing Year From T-Shirts",
  "Injecting Caffeine To Developers",
  "Eating Cake",
  "Determining Minimum Effort",
  "Sleeping Really Badly",
  "Committing git Suicide",
  "Sending Backups To /dev/null"
];

function updateProgress(percentage) {
  $('#pbar_innerdiv').css("width", percentage + "%");
  $('#pbar_innertext').text(percentage + "%");
}

function animateUpdate() {
  var start = new Date(Date.UTC(2016, 0, 1, 0, 0, 0, 0));
  var end = new Date(Date.UTC(2016, 3, 23, 10, 0, 0, 0));
  var maxTime = end.getTime() - start.getTime();
  var timeoutVal = Math.floor(maxTime / 100);

  var now = new Date();
  var timeDiff = now.getTime() - start.getTime();
  var perc = Math.round((timeDiff / maxTime) * 100);

  if (perc <= 100) {
    updateProgress(perc);
    setTimeout(animateUpdate, timeoutVal);
  } else {
    updateProgress(100);
  }
}

function randomFrase(){
  var index = Math.floor(Math.random()*(42+1));
  $("#randomText").text(frases[index]);
  setTimeout(randomFrase, 3000);
}
