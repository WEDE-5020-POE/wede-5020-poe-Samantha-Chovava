// Wait until page loads
document.addEventListener("DOMContentLoaded", function () {

    // SERVICE SEARCH
    const searchInput = document.getElementById("serviceSearch");

    if (searchInput) {

        searchInput.addEventListener("keyup", function () {

            let filter = searchInput.value.toLowerCase();

            let services =
                document.querySelectorAll(".service-item");

            services.forEach(function(service){

                let text =
                    service.textContent.toLowerCase();

                if(text.includes(filter)){
                    service.style.display = "block";
                }
                else{
                    service.style.display = "none";
                }
            });
        });
    }

    // CONTACT FORM VALIDATION
    const contactForm =
        document.getElementById("contactForm");

    if(contactForm){

        contactForm.addEventListener("submit", function(event){

            let name =
                document.getElementById("name").value;

            let phone =
                document.getElementById("phone").value;

            let message =
                document.getElementById("message").value;

            let phonePattern =
                /^[0-9]{10}$/;

            if(name.length < 3){

                alert(
                "Name must contain at least 3 characters."
                );

                event.preventDefault();
                return;
            }

            if(!phonePattern.test(phone)){

                alert(
                "Phone number must contain 10 digits."
                );

                event.preventDefault();
                return;
            }

            if(message.length < 10){

                alert(
                "Message must be at least 10 characters."
                );

                event.preventDefault();
                return;
            }

            alert(
            "Form submitted successfully!"
            );
        });
    }
            //Lightbox gallery
            const galleryImages=document.querySelectorAll("main img");
            const lightbox=document.getElementById("lightbox");
            const lightboxImg=document.getElementById("lightboxImg");
            const closeBtn=document.getElementById("closeLightbox");
            if(galleryImages.length>0){
                galleryImages.forEach(function(img){
                    img.addEventListener("click", function(){
                        lightbox.style.display="block";
                        lightboxImg.src=this.src;
                    });
                });
            }
            if(closeBtn){
            closeBtn.addEventListener("click",
                function(){
                    lightbox.style.display="none";
        });
    }
});